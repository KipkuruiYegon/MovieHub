import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./css/App.css";
import MovieCard from './components/MovieCard'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Favorites from './pages/Favorites'
import NavBar from './components/NavBar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
    </div>
    
  );
}

export default App;
