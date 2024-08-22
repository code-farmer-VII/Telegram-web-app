"use client";

import React from "react";
import Button from "@/Components/Button/buton";


export default function Home() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <div>
      <Button 
        title="Temesgen" 
        type="add" 
        disable={true}  
        onClick={handleClick} 
      />
    </div>
  );
}
