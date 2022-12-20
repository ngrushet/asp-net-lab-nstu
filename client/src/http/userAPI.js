import { $host } from "./index"

export const registration = async (login, password, adminLogin, adminPassword) => {
    const {data} = await $host.post('api/admin/registration', {
        "login":        login, 
        "password":     password, 
        "adminLogin":   adminLogin, 
        "adminPassword": adminPassword
    })
    localStorage.setItem('data', data.token)
    return (data.token);
}

export const login = async (login, password) => {
    const {data} = await $host.post('api/admin/login', {login, password})
    console.log(data)
    return data;
}
