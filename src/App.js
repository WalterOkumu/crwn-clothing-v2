import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './pages/Navigation';
import Authentication from './pages/Authentication';
import Shop from './pages/Shop';
import Checkout from './components/Checkout';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  </>
);

export default App;
