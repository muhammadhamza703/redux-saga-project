import { addToCart, removeFromCart, emptyCart } from "../redux/action"
import { useDispatch, useSelector } from 'react-redux'
import { productList } from "../redux/productAction";

// import Button from '@material-ui/core/Button';

function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state)=> state.productData)
    const productData = {
        name: 'iPhone',
        type: 'mobile',
        price: 290000,
        color: 'Sierra Blue'
    }

    return (
        <>
            <div>
                <button onClick={() => dispatch(addToCart(productData))}> Add to Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeFromCart(productData.name))}> Remove from Cart</button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyCart())}> Empty Cart</button>
            </div >
            <div>
                <button onClick={() => dispatch(productList())}> Get Product List</button>
            </div >
        </>

    );
}

export default Main;