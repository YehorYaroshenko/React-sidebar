import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/reports" element={<Reports />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
