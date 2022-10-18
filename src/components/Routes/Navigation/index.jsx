import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../../assets/crown.svg';
import './Navigation.styles.scss';

const Navigation = () => (
  <>
    <div className="navigation">
      <Link className="logo-container" to="/">
        <CrownLogo className="logo" />
      </Link>
      <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        <Link className="nav-link" to="/auth">
          LOG IN
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navigation;
