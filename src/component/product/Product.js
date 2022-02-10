import React , {useContext} from 'react'
import productContext from '../../context/Context';
import CartContext from '../../context/CartContext';
import './Product.css';
import Banner from '../banner/Banner';


function Product() {
    const data = useContext(productContext);
    const {dispatch} = useContext(CartContext);
    // console.log(dispatch);
    return (
        <div className="container">
        <Banner />
        <div className = "products">
             {data.map((product) => {
                 return (
                     <div className="product" key = {product.id}>
                        <div className="product_image">
                            <img src={product.img} alt="Not Found" />
                        </div>
                        <div className = "product_details">
                            <div className="product_name"> {product.name} </div>
                            <div className="product_price"> {product.price} Rs </div>

                        </div>
                        {product.status === 'hot' ? <div className="hot">Hot</div> : ''}
                        {product.status === 'new' ? <div className="new">New</div> : ''}
                        <div onClick = {()=> dispatch({type : 'ADD_TO_CART' , id:product.id , product})} className="add_to_cart">   
                            Add to cart
                        </div>
                     </div> 
                 )
             })}
        </div>
        </div>
    )
}

export default Product
