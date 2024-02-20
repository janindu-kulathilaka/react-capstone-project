import './App.css';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Menu from './pages/MenuPage';
import Reservations from './pages/ReservationsPage';
import OrderOnline from './pages/OrderOnlinePage';
import Login from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
