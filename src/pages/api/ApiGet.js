import {AxiosHeaders} from "./AxiosInstance";

export const getListProduct = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/product');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListGroupProduct = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/group-product');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListTrademark = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/trademark');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListLocation = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/location');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListProperties = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/properties');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListUnit = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/unit');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getListCategory = async (token) => {
    try {
        const axios = AxiosHeaders(token)
        const response = await axios.get('/category');
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
export const getSearchProductId = async (productId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/id/' + productId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchProductName = async (productName, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/name/' + productName)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchInventory = async (inventoryNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-inventory/' + inventoryNumber)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchDirectSales = async (directSalesNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-direct-sales/' + directSalesNumber)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchProductActive = async (activeNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-active/' + activeNumber)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchGroupProduct = async (groupProductId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-group-product/' + groupProductId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchTrademark = async (trademarkId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-trademark/' + trademarkId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchLocation = async (locationId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-location/' + locationId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}

export const getSearchCategory = async (categoryId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/search-category/' + categoryId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getListSupplier = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/supplier')
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getListGroupSupplier = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/group-supplier')
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchSupplierPhoneNumber = async (phoneNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-phone/' + phoneNumber)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchSupplierActive = async (activeNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const reponse = await axios.get('/suppliers/search-supplier-active/' + activeNumber)
        return reponse.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchSupplierTaxCode = async (taxCode, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-tax-code/' + taxCode)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchSupplierId = async (supplierId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-name/' + supplierId)
        return response.data.data
    }catch(err) {
        throw err
    }
}
export const getSearchSupplierName = async (supplierName, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-name/' + supplierName)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const getSearchGroupSupplier = async (groupSupplierId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-group-supplier/' + groupSupplierId)
        return response.data.data
    }catch(err) {
        throw err
    }
}
export const getListCustomer = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer')
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getListGender = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/gender')
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getSearchCustomerId = async (customerId, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-id/' + customerId)
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getSearchCustomerName = async (customerName, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-name/' + customerName)
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getSearchCustomerPhoneNumber = async (phoneNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/suppliers/search-phone/' + phoneNumber)
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getSearchCustomerEmail = async (email, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-email/' + email)
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getSearchCustomerAddress = async (address, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-address/' + address)
        return response.data.data
    }catch (err){
        throw err
    }
}
export const getSearchCustomerActive = async (active, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-active/' + active)
        return response.data.data
    }catch (err){
        throw err
    }
}
export const getSearchCustomerGender = async (gender, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/search-gender/' + gender)
        return response.data.data;
    }catch(err) {
        throw err
    }
}
export const getListEmployee = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee')
        return response.data.data
    }catch(err) {
        throw err
    }
}
export const getSearchEmployeeId = async (employeeId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee/search-id/' + employeeId)
        return response.data.data
    }catch (err){
        throw err
    }
}
export const getSearchEmployeeName = async (employeeName, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee/search-name/' + employeeName)
        return response.data.data
    }catch (err){
        throw err
    }
}
export const getSearchEmployeePhoneNumber = async (phoneNumber, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee/search-phone-number/' + phoneNumber)
        return response.data.data
    }catch(err) {
        throw err
    }
}
export const getSearchEmployeeActive = async (active, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee/search-active/' + active)
        return response.data.data
    }catch(err) {
        throw err
    }
}
export const getListCart = async (token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/list-cart')
        if (Array.isArray(response.data)) {
            return response.data
        }else {
            return []
        }
    }catch(err) {
        return []
    }
}
export const getListCustomerInfo = async (token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer-info')
        if (Array.isArray(response.data)) {
            return response.data
        }else {
            return []
        }
    }catch(err) {
        return []
    }
}
export const getAccountInfo = async (token) => {
    const axios = AxiosHeaders(token);
    try {
        const response = await axios.get('/info');
        return response.data;
    } catch (err) {
        console.error("Lỗi khi gọi API thông tin tài khoản:", err);
        return null;
    }
};
export const getFindByIdProduct = async (id, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/product/findById/' + id)
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getFindByIdSupplier = async (id, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/supplier/findById/' + id)
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getFindByIdCustomer = async (id, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/customer/findById/' + id)
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getFindByIdEmployee = async (id, token) =>{
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/employee/findById/' + id)
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getNotification = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/notification')
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getTodayPurchase = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/today-purchases')
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getSalesPercentageChange = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/sales-percentage-change')
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getSalesMonthPercentageChange = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/sales-month-percentage-change')
        return response.data;
    }catch(err) {
        return err;
    }
}
export const getDailySalesTotalPriceLast30Days = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.get('/daily-sales-total-price-last-30-days')
        return response.data;
    }catch(err) {
        return err;
    }
}