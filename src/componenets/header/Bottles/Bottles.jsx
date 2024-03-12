import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bootles.css'


const Bottles = () => {

    const [bottles, setBottles] = useState([])
    useEffect( () =>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data));
    }, [])

    return (
        <div>
            <h2>Bottles here: {bottles.length}</h2>
          <div className="bottle-conatiner">
            
          {
                bottles.map( bottle => <Bottle
                key={bottle.id}
                bottle={bottle}
                ></Bottle>)
            }
            
            </div>  
          
        </div>
    );
};

export default Bottles;