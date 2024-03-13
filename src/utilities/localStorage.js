const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')

    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const savedCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
} 


const addToLS = (id) => {
    const cart = getStoredCart();
    cart.push(id);

    //saved to local storage
    savedCartToLS(cart)
}

const removeFromLS = id =>{
    const cart = getStoredCart();

    //removing every id
    const remaining = cart.filter(idx => idx !==id)
    savedCartToLS(remaining);
}




export { addToLS, getStoredCart, removeFromLS }