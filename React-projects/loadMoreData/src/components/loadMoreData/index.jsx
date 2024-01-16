/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import "./styles.css"

export default function LoadMoreData(){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
    setLoading(true);
    fetchProducts().finally(() => setLoading(false));
    },[])


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

    return (<div className ="container">
    <div className="product-container">
        {
                products && products.length ? products.map((item) => (
                <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="product-descri"><p>{item.description}</p></div>
                </div>
            )): (
                <div>No products found</div>
            )
        }
    </div>
    <div className="button-container">
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>Load More Products</button>
    </div>
    </div>
        )
}