import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bootles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../../utilities/localStorage";
import Cart from "../Cart/Cart";
import PropTypes from 'prop-types'


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);




    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    //load cart from local storage
    useEffect(() => {
        console.log('call the use effect', bottles.length)
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart = [];
            for( const id of storedCart){
                console.log(id);

                const bottle = bottles.find(bottle => bottle.id === id);

                if(bottle){
                    savedCart.push(bottle);
                }


            }

            console.log('saved cart', savedCart);
            setCart(savedCart);


        }
    }, [bottles])

    const handleAddCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

const handleRemoveFromCArt = (id) =>{
    // visual cart remve
    const remainingCart = cart.filter(bottle => bottle.id !== id)
    setCart(remainingCart);
   //remove from LS
removeFromLS(id);
}


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>

        <Cart cart={cart} handleRemoveFromCArt={handleRemoveFromCArt}></Cart>


           
            <div className="bottle-conatiner">

                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddCart={handleAddCart}
                    ></Bottle>)
                }

            </div>

        </div>
    );
};

Bottle.propTypes ={
    bottle: PropTypes.object.isRequired,
    handleAddCart: PropTypes.func.isRequired
}

export default Bottles;