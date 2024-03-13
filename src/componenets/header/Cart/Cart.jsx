import PropTypes from 'prop-types'
import './Cart.css'
const Cart = ({cart, handleRemoveFromCArt}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
        {cart.map(bottle => <div key={bottle.id}>
            <img  src={bottle.img}></img> 
            <button onClick={ ()=> handleRemoveFromCArt(bottle.id)}>Remove</button>
            </div>)}
            </div>
        </div>
    );
};

Cart.propTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCArt:PropTypes.func.isRequired
}

export default Cart;