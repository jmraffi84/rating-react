
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
