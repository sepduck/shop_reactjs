import {AxiosHeaders, AxiosHeadersImage, AxiosHeadersTokenAndImage} from "./AxiosInstance";

export const postSaveProduct = async (formData, token) => {
    const axios = AxiosHeadersTokenAndImage(token)
    try {
        await axios.post('/product', formData)
    } catch (err) {
        throw err;
    }
}
export const postSaveGroupProduct = async (groupProductSave, token) => {
    let data = {
        groupProductName: groupProductSave.groupProductName,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/group-product', data);
    } catch (err) {
        throw err;
    }
}
export const postSaveTrademark = async (trademarkSave, token) => {
    let data = {
        trademarkName: trademarkSave.trademarkName,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/trademark', data);
    } catch (err) {
        return err;
    }
}
export const postSaveLocation = async (trademarkSave, token) => {
    let data = {
        trademarkName: trademarkSave.trademarkName,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/location', data);
    } catch (err) {
        throw err;
    }
}
export const postSaveProperties = async (propertiesSave, token) => {
    let data = {
        propertiesName: propertiesSave.propertiesName,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/properties', data);
    } catch (err) {
        throw err
    }
}
export const postSaveUnit = async (unitSave, token) => {
    let data = {
        unitName: unitSave.unitName,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/unit', data)
    } catch (err) {
        throw err;
    }
}
export const postSaveSupplier = async (supplierSave, token) => {
    let data = {
        supplierName: supplierSave.supplierName,
        phoneNumber: supplierSave.phoneNumber,
        address: supplierSave.address,
        email: supplierSave.email,
        company: supplierSave.company,
        taxCode: supplierSave.taxCode,
        groupSupplierId: supplierSave.groupSupplierId,
        productId: supplierSave.productId
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/supplier', data)
    } catch (err) {
        throw err
    }
}
export const postSaveGroupSupplier = async (groupSupplierSave, token) => {
    let data = {
        groupSupplierName: groupSupplierSave.groupSupplierName,
        note: groupSupplierSave.note
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/group-supplier', data)
    } catch (err) {
        throw err
    }
}
export const postAddRoles = async (userId, token) => {
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/employee-role/' + userId)
    } catch (err) {
        throw err
    }
}
export const postAddProduct = async (productId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.post('/cart/add/' + productId)
        return response.data.data;
    } catch (err) {
        throw err
    }
}
export const postCustomerInfo = async (customerInfo, token) => {
    const data = {
        customerName: customerInfo.customerName,
        phone: customerInfo.phone,
        address: customerInfo.address,
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/customer-info', data)
        console.log(data.customerName)
    } catch (err) {
        console.log(err)
        throw err
    }
}
export const postSellCart = async (cartId, customerId, token) => {
    const axios = AxiosHeaders(token)
    try {
        const response = await axios.post('/cart/sell/' + cartId + '/' + customerId);
        return response.data.data;
    } catch (error) {
        console.error('Error selling cart:', error);
        throw error;
    }
};
export const postLogout = async (token) => {
    const axios = AxiosHeaders(token)
    try {
        await axios.post('/log-out')

    } catch (err) {
        throw err;
    }
}
export const postRegister = async (formData) => {
    const axios = AxiosHeadersImage()
    try {
        await axios.post('/register', formData
        );
    } catch (err) {
        throw err;
    }
}
export const postEmployeeSave = async (formData, token) => {
    const axios = AxiosHeadersTokenAndImage(token)
    try {
        await axios.post('/employee', formData
        );
    } catch (err) {
        throw err;
    }
}
