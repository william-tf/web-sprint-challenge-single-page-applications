import React from "react";
import {Link} from 'react-router-dom'
export default function homePage(){
    
    
    return(
        <div>
        <Link to="/form">
        <button>Order</button>
        </Link>
        </div>
    )
}