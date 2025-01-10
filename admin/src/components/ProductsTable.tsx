import useProducts from '@/hooks/useProducts';
import { get_all_products } from '@/lib/actions/product.action';
import React from 'react'
import { useQuery } from '@apollo/client';
import { closedProducts } from '@/lib/actions/product.action';

const ProductsTable = ( {type} : {type:string} ) => {
    if(type === 'All'){
        const { products, loading } = useProducts(get_all_products);
        console.log(products);
        
    }
    else if(type === 'Awaiting Action'){
      const { loading, error, data } = useQuery(closedProducts);
      console.log(data);
      
    }
    else if(type === 'In Auction'){
        
    }else if(type === 'Bided'){
        
    }else{
      const { products, loading } = useProducts(get_all_products);
    }
  return (
    <div>ProductsTable</div>
  )
}

export default ProductsTable