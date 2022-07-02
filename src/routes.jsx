import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom"
import App from "./App"
import Products from "./pages/Products"
import SearchResults from "./pages/SearchResults"
import DetailsProduct from "./pages/DetailsProduct"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Public from "./guards/Public"
import Signup from "./pages/Signup"

const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="home" element={<Public><Home /></Public>}>
            <Route index element={<Products />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="product/:productId" element={<DetailsProduct />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="app" element={<p>Holaa</p>} />
        </Route>
        <Route path="*" element={
        <div className="container mt-5">
          <Link to='/home' className="btn btn-primary mb-3"><b>Go to Home</b></Link>
          <h4>NOT FOUND PAGE</h4>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Paths