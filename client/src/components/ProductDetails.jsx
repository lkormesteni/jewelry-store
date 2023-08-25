import React from "react";

function ProductDetails(props) {
    
  return (
    <div className="container-list-pic">
        <img src={props.element.image} alt={props.element.image} />
        <span>Title : {props.element.title}</span> <br/>
        <span>Description : {props.element.description}</span> <br/>
        <span>Price : {props.element.price}</span> <br/>
        <button className="button-order">ORDER</button>
    </div>
  );
}

export default ProductDetails;
