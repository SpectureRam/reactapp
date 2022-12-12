import React from "react";

function NBookItem({ image, name, name1 }) {
  return (
    <div className="bookItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h2> {name} </h2>                        
      <p>  {name1} </p>
    </div>
  );
}

export default NBookItem;