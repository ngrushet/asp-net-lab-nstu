import {$host} from "./index";

export const createCategory = async (category) => {
    const {data} = await $host.post('api/category', {
        "name": category,
        "adminPassword": "12345",
        "adminLogin": "ngrushet"
    });
    return data;
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category');
    return data;
}

export const createProduct = async (product) => {
    const {data} = await $host.post('api/product', product)
    return data;
}

export const fetchProducts = async (categoryId) => {
    const {data} = await $host.get(
        'api/product', {
            params: { categoryId }
        }
    )
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data;
}