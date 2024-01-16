/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

export default function LoadMoreData(){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [count, setCount] = useState(0);

    async function fetchProducts(){
        try{
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0: count*20}`);

            const result = await response.json();

            if(result && result.products && result.products.length){
                setProducts(result.products);
                setLoading(false);
            }

        }catch(error){
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    if(loading){
        return <div>Loading Please wait...</div>
    }

    if(errorMsg !== null){
        return <div>Error occured! {errorMsg}</div>
    }

    useEffect(() => {
        fetchProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (<div className ="container">
        {
            console.log(products)}
        {
            products && products.length ? products.map((item) => (
                <div className="product-container" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="product-descri"><p>{item.description}</p></div>
                </div>
            )): fetchProducts()
        }
        </div>)
}