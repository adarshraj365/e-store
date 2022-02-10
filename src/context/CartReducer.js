const CartRreducer = (state,action) => {
    const {shoppingCart , qty , totalPrice} = state;
    let newQty;
    let newTotalPrice;
    let product;
    let index;
    switch(action.type){
        case 'ADD_TO_CART':
            const check = shoppingCart.find(product => product.id === action.id);
            if(check){
                return state;
            }
            else {
                product = action.product ;
                product['count'] = 1 ;
                newQty = qty + 1 ;
                newTotalPrice = totalPrice + product.price ;

                return {shoppingCart : [product , ...shoppingCart] , qty : newQty , totalPrice : newTotalPrice};
            }
            break;

        case 'INC' :
            product = action.cart ;
            product.count = product.count + 1 ;
            newTotalPrice = totalPrice + product.price ;    
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product ;
            
            return {shoppingCart : [...shoppingCart] ,totalPrice : newTotalPrice , qty : qty };
        
            
        case 'DEC' :
            product = action.cart ;
            if(product.count == 1){
                var filtered = shoppingCart.filter(product => product.id !== action.id);
                newTotalPrice = totalPrice - (product.price * product.count) ;
                newQty = qty-1;
                return {shoppingCart :  [...filtered], totalPrice:newTotalPrice , qty:newQty};
            }
            product.count = product.count - 1 ;
            newTotalPrice = totalPrice - product.price ;    
            index = shoppingCart.findIndex(cart => cart.id === action.id);
            shoppingCart[index] = product ;
            
            return {shoppingCart : [...shoppingCart] ,totalPrice : newTotalPrice , qty : qty };

        case 'DELETE' :
            product = action.cart;
            var filtered = shoppingCart.filter(product => product.id !== action.id);
            newTotalPrice = totalPrice - (product.price * product.count) ;
            newQty = qty-1;
            return {shoppingCart :  [...filtered], totalPrice:newTotalPrice , qty:newQty};

        default :
            return state ;

    }
}

export default CartRreducer;