import { addToCart, removeFromCart, emptyCart } from "../redux/action"
import { useDispatch, useSelector } from 'react-redux'
import { productList } from "../redux/productAction";
import React, { useEffect } from 'react';


// import Button from '@material-ui/core/Button';

function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.productData)

    useEffect(()=>{
        dispatch(productList())
    },[])

    return (
        <>
            <div>
                <button onClick={() => dispatch(emptyCart())}> Empty Cart</button>
            </div >
            <div className="product-container">
                {
                data.map((item)=>{
                    return (
                    <div className="product-item" key={item.name}>
                        <img src={item.photo} alt={item.photo} />
                        <div> Name : {item.name} </div>
                        <div> Color : {item.color} </div>
                        <div> Brand : {item.brand} </div>
                        <div> Proce : {item.price} </div>
                        <div> Category : {item.category} </div>
                        <div>
                            <button onClick={() => dispatch(addToCart(item))}> Add to Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}> Remove From Cart</button>
                        </div>
                    </div>
                )
                })
                }
                
            </div >
        </>

    );
}

export default Main;