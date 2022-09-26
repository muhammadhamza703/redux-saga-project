import { Co2Sharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Cart = () => {

    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item=>item.price).reduce((prev,next) => prev+next);
    return (
        <div>
            <Link to="/">Product List</Link>
            <h1>Cart</h1>
            <div className="cart-page-container">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>Color</td>
                        <td>Price</td>
                        <td>Brand</td>
                        <td>Category</td>
                    </tr>
                    {
                        cartData.map((cartItem) => {
                            return (
                                <tr key={cartItem.id}>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.color}</td>
                                    <td>{cartItem.price}</td>
                                    <td>{cartItem.brand}</td>
                                    <td>{cartItem.category}</td>
                                </tr>
                            )

                        }
                        )
                    }
                </table>
                <div className="price-details">
                    <div className="adjust-price">
                        <span>
                            Amount
                        </span>
                        <span>
                            {amount}
                        </span>
                    </div>
                    <div className="adjust-price">
                        <span>
                            Discount
                        </span>
                        <span>
                            {amount/10}
                        </span>
                    </div>
                    <div className="adjust-price">
                        <span>
                            Tax Deducted
                        </span>
                        <span>
                            0
                        </span>
                    </div>
                    <div className="adjust-price">
                        <span>
                            Total Amount
                        </span>
                        <span>
                            {amount - (amount / 10)}
                        </span>
                    </div>

                </div>


            </div>
        </div >

    );
}

export default Cart;