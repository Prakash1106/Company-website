import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";


import Quantitative from "./pages/Quantitative";

import DataInt from "./pages/DataInt";
import Verbal from "./pages/Verbal";
import Cloud from "./pages/Cloud";
import CyberSecurity from "./pages/CyberSecurity";
import WhyCapgemini from "./pages/WhyCapgemini"
import LifeatCapgemini from "./pages/LifeatCapgemini"
import WhoweAre from "./pages/WhoweAre"
import TechnologyPartners from "./pages/TechnologyPartners"






import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasssword";
import AdminRoute from "./components/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";
import Nonverbal from "./pages/Nonverbal";
import Logical from "./pages/Logical";
import NumberS from "./inside/NumberS";
import HcfLcm from "./inside/HcfLcm";
import Average from "./inside/Average";
import Premium from "./inside/Premium";
import BarG from "./inside/BarG";
import LineG from "./inside/LineG";
import PieC from "./inside/PieC";
import OrderandRanking from "./inside/OrderandRanking";
import Clock from "./inside/Clock";
import Calendar from "./inside/Calendar";
import CodingandDecoding from "./inside/CodingandDecoding";
import SeatingandArrangement from "./inside/SeatingandArrangement";
import Syllogism from "./inside/Syllogism";
import Accenture from "./inside/Accenture";
import Wipro from "./inside/Wipro";
import Cisco from "./inside/Cisco";
import CloudwithAws from "./inside/CloudwithAws"
import CloudwithGoogle from "./inside/CloudwithGoogle"
import CloudwithMicrosoft from "./inside/CloudwithMicrosoft.js"
import DefineyourRoadmap from "./inside/DefineyourRoadmap"
import DefineyourBusiness from "./inside/DefineyourRoadmap"
import NetworktoConnect from "./inside/NetworktoConnect"
import ImpactfulExperiences from "./inside/ImpactfulExperiences"
import GlobalemployeeNetwork from "./inside/GlobalemployeeNetwork"
import ContributetoCommunity from "./inside/ContributetoCommunity"
import GettheFuture from "./inside/GettheFuture"
import Adobe from "./inside/Adobe"
import Aws from "./inside/Aws"
import Ibm from "./inside/Ibm"








function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPasssword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/quantitative" element={<Quantitative />} />
        <Route path="/dataint" element={<DataInt />} />
        <Route path="/verbal" element={<Verbal />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/cybersecurity" element={<CyberSecurity />} />
        <Route path="/whycapgemini" element={<WhyCapgemini />} />
        <Route path="/lifeatcapgemini" element={<LifeatCapgemini />} />
        <Route path="/whoweare" element={<WhoweAre />} />
        <Route path="/technologypartners" element={<TechnologyPartners />} />






        <Route path="/nonverbal" element={<Nonverbal />} />
        <Route path="/logical" element={<Logical />} />
        <Route path="/number-system" element={<NumberS />} />
        <Route path="/hcf-lcm" element={<HcfLcm />} />
        <Route path="/a-v-g" element={<Average />} />
        <Route path="/prem" element={<Premium />} />
        <Route path="/bar-graphs" element={<BarG />} />
        <Route path="/line-graphs" element={<LineG />} />
        <Route path="/pie-charts" element={<PieC />} />
        <Route path="/c-l-o" element={<Clock />} />
        <Route path="/c-a-l" element={<Calendar />} />
        <Route path="/c-a-d" element={<CodingandDecoding />} />
        <Route path="/s-a" element={<SeatingandArrangement />} />
        <Route path="/s-y-l" element={<Syllogism />} />
        <Route path="/accenture" element={<Accenture />} />
        <Route path="/c-w-a" element={<CloudwithAws />} />
        <Route path="/c-w-g" element={<CloudwithGoogle />} />

        <Route path="/c-w-m" element={<CloudwithMicrosoft />} />
        <Route path="/d-y-r" element={<DefineyourRoadmap />} />
        <Route path="/d-y-b" element={<DefineyourBusiness />} />
        <Route path="/n-t-c" element={<NetworktoConnect />} />
        <Route path="/i-e" element={<ImpactfulExperiences />} />
        <Route path="/g-e-n" element={<GlobalemployeeNetwork />} />
        <Route path="/c-t-c" element={<ContributetoCommunity />} />
        <Route path="/g-t-f" element={<GettheFuture />} />
        <Route path="/a-d-b" element={<Adobe />} />
        <Route path="/a-w-s" element={<Aws />} />
        <Route path="/i-b-m" element={<Ibm />} />







        


        






        verbal
        <Route path="/wipro" element={<Wipro />} />
        <Route path="/cisco" element={<Cisco />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/o-a-r" element={<OrderandRanking />} />
      </Routes>
    </>
  );
}

export default App;
