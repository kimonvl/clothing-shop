import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartVisible } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

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
          {currentUser ? (
            <span onClick={signOutHandler} style={{ cursor: "pointer" }}>
              SIGN OUT
            </span>
          ) : (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          )}
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