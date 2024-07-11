import axios from "axios";

export const AxiosHeaders = (token) => {
    return axios.create({
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
};
export const AxiosHeadersTokenAndImage = (token) => {
    return axios.create({
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    })
};
export const AxiosHeadersImage = () => {
    return axios.create({
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
};

