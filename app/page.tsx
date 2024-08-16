import React from "react";
import Button from "@/Components/Button/buton";
export default function Home() {
    function handleClick (){
        console.log("handle click")
    }
  return (
    <div>
      <Button title="temesgen" type="add" disable={true} onClick={handleClick}/>
    </div>
  );
}
