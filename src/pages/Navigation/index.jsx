import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { CartContext } from '../../context/CartContext';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/CartIcon';
import CartDropdown from '../../components/CartDropdown';
import {
  NavigationContainer, NavLinks, NavLink, LogoContainer,
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
            )
              : (
                <NavLink to="/auth">
                  SIGN IN
                </NavLink>
              )
          }
          <CartIcon />
        </NavLinks>
        {
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
