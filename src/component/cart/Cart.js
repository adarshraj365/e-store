import React , {useContext} from 'react'
import './Cart.css';
import CartContext from '../../context/CartContext';
import StripeCheckout from 'react-stripe-checkout';


const handelPayment = (token) => {
    
}

function Cart() {
    const data = useContext(CartContext);
    const {shoppingCart,totalPrice} = data.cart ;
    const {dispatch} = data;


    
    return (
        <div className = "">
            {shoppingCart.length > 0 ? <div className="cart-container">
            {shoppingCart.map((cart) => {
                return (
                    <div className="cart">
                        <div className = "item_image"> <img src={cart.img} /> </div>
                        <div className = "item_name">{cart.name}</div>
                        <div className="item_price">{cart.price} Rs</div>
                        <div className="item_qty">
                        <div className="item_inc" onClick = {()=> dispatch({type:'INC' , id : cart.id , cart : cart})} ><i className="fas fa-plus"></i></div>
                        <div className="item_count">{cart.count}</div>
                        <div className="item_dec" onClick = {() => dispatch({type : 'DEC' , id : cart.id , cart : cart})} ><i className="fas fa-minus"></i></div>
                        </div>
                        {/* <div className="item_price">{cart.price}</div> */}
                        <div className="item_remove" onClick = {()=> dispatch({type : 'DELETE' , id : cart.id , cart : cart})} ><i className="far fa-trash-alt"></i></div>
                    </div>
                    
                )
                
            })}
            </div>  : <div className="empty_cart"> sorry your cart is empty !</div>}

            {shoppingCart.length > 0 ? 
            <div className="cart_summary">
                <div><h1>Cart summary </h1></div>
                <div><h2>Total Proce : {totalPrice} Rs</h2></div>
                <div><StripeCheckout 
                    stripekey = "pk_test_51JBcBsSJTenx5Tpgthqu3c00Qm1GCzncRi3rieUuZNY8EVLZn2AO8gfCYEVJKs7jWnKuSG1GFlA7Mre5SDIPbf0300q0sCOjPk"
                    token = {handelPayment}
                    billingAddress
                    shippingAddress
                    amount = {totalPrice * 100}
                    name = "E-cart payment"
                /></div>
            </div>  :''}

        </div>
    )
}

export default Cart
