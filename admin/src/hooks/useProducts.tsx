import { useEffect, useState} from 'react'

const useProducts = (fn) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async() => {
        setLoading(true);
        try {
            const res = await fn()
            setProducts(res);
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        loading
    }
}

export default useProducts
