import {AxiosHeaders} from "./AxiosInstance";

export const delCart = async (cartId, token) => {
    const axios = AxiosHeaders(token)
    try {
        await axios.delete('/delete-cart/' + cartId)
    }catch(err) {
        throw err;
    }
}
export const deleteProduct = async (productId, token) => {
    const axios = AxiosHeaders(token)
    try {
        await axios.delete('/product/' + productId)
    }catch(err) {
        throw err;
    }
}
export const deleteSupplier = async (supplierId, token) =>{
    const axios = AxiosHeaders(token)
    try {
        await axios.delete('/supplier/' + supplierId)
    }catch(err) {
        throw err;
    }
}
export const deleteCustomer = async (customerId, token) =>{
    const axios = AxiosHeaders(token)
    try {
        await axios.delete('/customer/' + customerId)
    }catch(err) {
        throw err;
    }
}