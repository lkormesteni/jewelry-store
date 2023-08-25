import React from "react";

function ProductDetails(props) {
    
  return (
    <div className="container-list-pic">
        <span>Title : {props.element.title}</span>
        <span>Description : {props.element.description}</span>
        <span>Price : {props.element.price}</span>
        <img src={props.element.image} alt={props.element.image} />
        <button  className="button-delete">DELETE</button>
        <button className="button-update">UPDATE</button>
    </div>
  );
}

export default ProductDetails;
