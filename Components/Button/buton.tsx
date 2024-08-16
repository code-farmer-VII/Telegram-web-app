import React from "react";

const Button = ({ type, title, disable, onClick }:{
    type:string,
    title:string,
    disable:boolean,
    onClick:Function
}) => {

  return (
      <button 
      className={
        `btn 
        $type ==="add" && add ||
        $type ==="remove" && remove ||
        $type === "checkout" && checkout
        `
      } 
      disabled={disable}
      onClick={()=>onClick}  
      >{title}</button>
  );
};

export default Button;
