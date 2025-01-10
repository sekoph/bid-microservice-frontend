import { Product } from "@/types";

// create products
export const create_product = async(product:Product,token:string) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/api/products/add`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(product)
        })
        if(response.ok){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("create product error", error);
    }
}


// fetch products category
export const get_products_category = async() => {
    try {
        const category = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/api/product_category`,{
            headers:{
                'Accept': 'application/json',
            }
        })

        if(category.ok){
            const data = await category.json();
            return data;
        }
    } catch (error) {
        
    }
}


// fetch all products

export const get_products = async() => {
    try {
        const category = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/api/products`,{
            headers:{
                'Accept': 'application/json',
            }
        })

        if(category.ok){
            const data = await category.json();
            return data;
        }
    } catch (error) {
        
    }
}
