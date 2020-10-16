import React from "react";
import {Link} from 'react-router-dom'
import axios from 'axios'
import schema from '../schema'


export default function Form(props){
    const {values, submit, change, disabled} = props


    return(
        <div className="form-container">
            <form onSubmit={submit}>
            <div className="size-container">
                
        <label>
            <h3>Choice of Size</h3>
            <select name="size" onChange={change} >
                <option value="">===Choose a Size===</option>
                <option value="1">Very large</option>
                <option value="2">Large</option>
                <option value="3">Medium</option>
                <option value="4">Small</option>
            </select>
            
        </label>
        </div>
        
        <div className="toppings-container">
        <label>
            <h3>Add toppings</h3>
            <p>Choose up to 3</p>
        </label>
        <label>
           <p> Pepperoni</p>
        <input type='checkbox' onChange={change} name="pepperoni" checked={values.pepperoni}/>
        </label>
        <label>
            <p>Pineapple</p>
            <input type='checkbox' onChange={change} name="pineapple" checked={values.pineapple}/>
        </label>
        <label>
            <p>Bacon</p>
            <input type ='checkbox' onChange={change} name="bacon" checked={values.bacon}/>
        </label>
        <label>
            <p>Black Olives</p>
            <input type='checkbox' onChange={change} name="olives" checked={values.olives}/>
        </label>
        </div>
        <div className="name-container">
            <label>
                <h3>Enter a name for the order:</h3>
                <div></div>
                <input type='text' value={values.name} onChange={change} name="name"/>
            </label>
        </div>
        <div className="instruction-container">
            <label>
                <h3>Special Instructions:</h3>
                <input type='text' onChange={change} name="instructions"/>
            </label>
            
        </div>
        <div>
            
        <button disabled={disabled} name="submit">Place Order</button>
    
        <Link to="/pizza">
        <button>View Order</button>
        </Link>
        </div>
        </form>
        </div>//main div

    )
}