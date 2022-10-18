import { Routes, Route } from 'react-router-dom';
import Home from './components/Routes/Home';
import Navigation from './components/Routes/Navigation';
import Authentication from './components/Routes/Authentication';

const Shop = () => <h1>I am the Shop Page</h1>;

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  </>
);

export default App;
