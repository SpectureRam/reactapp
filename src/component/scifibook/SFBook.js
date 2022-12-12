import React from "react";
import { SFBookList } from "./SFBookList";
import SFBookItem from "./SFBookItem";
import "../book.css";

function SFBook() {
  return (
    <div className="book">
        <h1 className="bookTitle">Sci-FI</h1>
      <div className="bookList">
        {SFBookList.map((bookItem, key) => {
          return (
            <SFBookItem
              key={key}
              image={bookItem.image}
              name={bookItem.name}
              
            
            />
          );
        })}
      </div>
      </div>
       
  );
}

export default SFBook;