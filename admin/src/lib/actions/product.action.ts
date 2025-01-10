
import { useQuery,gql } from "@apollo/client";

// fetct all products


export const get_all_products = async() => {
    try {
        const products = await fetch(`${import.meta.env.VITE_API_URL}/products/api/products`, {
            method:'GET',
            headers: {
                'Accept': 'application/json',
            }
        })
        if(products.ok){
            const data = await products.json();
            return data;
        }
        else{
            throw new Error("Failed to fetch products");
        }
    } catch (error) {
        console.log(error);
    }
}


export const closedProducts = gql`
  query ClosedProducts {
    closedProducts {
      id
      productName
      description
      location
      disposalPrice
      dateCreated
      ownerId
    }
  }
`;
