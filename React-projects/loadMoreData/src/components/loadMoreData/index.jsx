/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import "./styles.css"

export default function LoadMoreData(){

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [count, setCount] = useState(0);
    const [disabled, setDisabled] = useState(false);

    
    async function fetchProducts(){
        try{
            setLoading(true);

            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0: count*20}`);

            const result = await response.json();

            console.log(result.products)

            if(result && result.products && result.products.length){
                setProducts((prevProducts) => {
                    // Create a new array that contains only the new products that are not already in prevProducts
                    const newProducts = result.products.filter(
                        (product) => !prevProducts.some((prevProduct) => prevProduct.id === product.id)
                    );

                    // Return a new array that contains all the old products and the new, filtered products
                    return [...prevProducts, ...newProducts];
                });
                setLoading(false);
            }

        }catch(error){
            setErrorMsg(error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[ count ])

    useEffect(() => {
        if (products && products.length ===100) setDisabled(true);
    },[products])


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
        <button disabled={disabled} onClick={() => setCount(count + 1)} >Load More Products</button>
        {
            disabled? <div>You reached the end of the list</div> :null
        }
    </div>
    </div>
        )
}