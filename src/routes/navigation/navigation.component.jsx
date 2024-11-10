import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from "./navigation.styles.jsx";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isVisible} = useContext(CartContext);

  const signOutHandler = async () =>{
    await signOutUser();
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