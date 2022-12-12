import React from "react";
import { NBookList } from "./NBookList";
import NBookItem from "./NBookItem";
import "../book.css";

function NBook() {
  return (
    <div className="book">
        <h1 className="bookTitle">Novel</h1>
      <div className="bookList">
        {NBookList.map((bookItem, key) => {
          return (
            <NBookItem
              key={key}
              image={bookItem.image}
              name={bookItem.name}
              name1={bookItem.name1}
            
            />
          );
        })}
      </div>
      </div>
       
  );
}

export default NBook;