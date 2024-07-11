import {AxiosHeaders, AxiosHeadersTokenAndImage} from "./AxiosInstance";

export const putProduct = async (productId, formEdit, token) =>{
    const axios = AxiosHeadersTokenAndImage(token)
    try {
        await axios.put('/product/' + productId, formEdit)
    }catch (err){
        throw err;
    }
}
export const putSupplier = async (supplierId, supplierUpdate, token) =>{
    let data = {
        supplierId: supplierUpdate.supplierId,
        supplierName: supplierUpdate.supplierName,
        phoneNumber: supplierUpdate.phoneNumber,
        address: supplierUpdate.address,
        email: supplierUpdate.email,
        company: supplierUpdate.company,
        taxCode: supplierUpdate.taxCode,
        groupSupplierId: supplierUpdate.groupSupplierId,
        productId: supplierUpdate.productId
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.put('/supplier/' + supplierId, data)
    }catch (err){
        throw err;
    }
}
export const putPassword = async (passwordChange, token) =>{
    let data = {
        oldPassword: passwordChange.oldPassword,
        newPassword: passwordChange.newPassword,
        confirmPassword: passwordChange.confirmPassword
    }
    const axios = AxiosHeaders(token)
    try {
        await axios.put('/password', data)
    }catch (err){
        throw err;
    }
}
export const putCustomer = async (userId, formData, token) =>{
    const axios = AxiosHeadersTokenAndImage(token)
    try {
        await axios.put('/customer/' + userId, formData)
    }catch (err){
        throw err;
    }
}
export const putEmployee = async (userId, formEdit, token) =>{
    const axios = AxiosHeadersTokenAndImage(token)
    try {
        await axios.put('/employee/' + userId, formEdit)
    }catch (err){
        throw err;
    }
}