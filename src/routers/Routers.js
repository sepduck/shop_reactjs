import {Route, Routes} from "react-router-dom";
import FormProduct from "../pages/product/FormProduct";
import Login from "../pages/login/Login";
import FormEditProduct from "../pages/product/FormEditProduct";
import Location from "../pages/location/Location";
import FormSupplier from "../pages/supplier/FormSupplier";
import FormSale from "../pages/sale/FormSale";
import FormCart from "../pages/sale/FormCart";
import FormOverView from "../pages/overview/FormOverView";
import FormCustomer from "../pages/customer/FormCustomer";
import FormEmployee from "../pages/employee/FormEmployee";
import FormEditSupplier from "../pages/supplier/FormEditSupplier";
import FormEditCustomer from "../pages/customer/FormEditCustomer";
import FormEditEmployee from "../pages/employee/FormEditEmployee";

function MyRouters() {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/sale" element={<FormSale/>}/>
            <Route path="/cart" element={<FormCart/>}/>
            <Route path="/product" element={<FormProduct/>}/>
            <Route path="/supplier" element={<FormSupplier/>}/>
            <Route path="/edit/:id" element={<FormEditProduct/>}/>
            <Route path="/customer" element={<FormCustomer/>}/>
            <Route path="/employee" element={<FormEmployee/>}/>
            <Route path="/DashBoard" element={<FormOverView/>}/>
            <Route path="/location/list" element={<Location/>}/>
            <Route path="/supplier/edit/:id" element={<FormEditSupplier/>}/>
            <Route path="/customer/edit/:id" element={<FormEditCustomer/>}/>
            <Route path="/employee/edit/:id" element={<FormEditEmployee/>}/>
        </Routes>
    )
}

export default MyRouters