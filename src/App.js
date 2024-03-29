import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import Mystate from "./context/data/Mystate";
import Allproducts from './pages/allproducts/AllProducts';
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProduct from "./pages/admin/page/Addproduct";
import UpdateProduct from "./pages/admin/page/updateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <Mystate>
    <Router basename="/react-ecommerce">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<Allproducts />} />
        <Route path="/order" element={
        <ProtectedRouteforUser>
          <Order />
        </ProtectedRouteforUser>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={
          <ProtectedRouteForAdmin>
            <Dashboard />
          </ProtectedRouteForAdmin>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route path="/addproduct" element={
            <ProtectedRouteForAdmin><AddProduct /></ProtectedRouteForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin><UpdateProduct /></ProtectedRouteForAdmin>} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Router>
    </Mystate>
  )
}

export default App;

// protected route for user 

export const ProtectedRouteforUser = ({children}) => {
  const user = localStorage.getItem('user');
  if(user) {
    return children
  } else {
    return <Navigate to={'/react-ecommerce/login'} />
  }
}

// protected Route for Admin

export const ProtectedRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  
  if(admin.user.email === 'vivekadmin@gmail.com') {
    return children;
  } else {
    return <Navigate to={'/react-ecommerce/login'} />
  }
}