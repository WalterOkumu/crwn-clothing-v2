import { Routes, Route } from 'react-router-dom';
import Home from './components/Routes/Home';
import Navigation from './components/Routes/Navigation';
import Login from './components/Routes/Login';

const Shop = () => <h1>I am the Shop Page</h1>;

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </>
);

export default App;
