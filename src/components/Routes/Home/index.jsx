import { Outlet } from 'react-router-dom';
import Category from '../../Category';

const Home = () => (
  <>
    <Category />
    <Outlet />
  </>
);

export default Home;
