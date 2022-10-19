/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { CartContext } from '../../../context/CartContext';
import { signOutUser } from '../../../utils/firebase/firebase.utils';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import CartIcon from '../../CartIcon';
import CartDropdown from '../../CartDropdown';
import './Navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>
                SIGN OUT
              </span>
            )
              : (
                <Link className="nav-link" to="/auth">
                  SIGN IN
                </Link>
              )
          }
          <CartIcon />
        </div>
        {
          isCartOpen && <CartDropdown />
        }
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
