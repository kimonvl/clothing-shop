import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import React from "react";
import { selectIsCartVisible } from "../../store/cart/cart.selector.js";
import { signOutStart } from "../../store/user/user.action.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isVisible = useSelector(selectIsCartVisible);
  const dispatch = useDispatch();

  const signOutHandler = async () =>{
    dispatch(signOutStart());
  }

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <Logo className="logo"/>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to={"/shop"}>
              SHOP
          </NavLink>
          {
            // @ts-ignore
            currentUser ? (<NavLink as="span" onClick={signOutHandler}>SIGN OUT</NavLink>) : (<NavLink to={"/auth"}>SIGN IN</NavLink>)
          }
          <CartIcon />
        </NavLinksContainer>
        {
          isVisible ? <CartDropdown /> : <Fragment></Fragment>
        }
        
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;