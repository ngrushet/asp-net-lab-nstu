import {$authHost, $host} from "./index";

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category);
    return data;
}

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category');
    return data;
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data;
}

export const fetchProducts = async (categoryId, page = 1, limit = 10) => {
    const {data} = await $host.get(
        'api/product', 
        {
            params: { categoryId, page, limit }
        }
    )
    return data;
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data;
}