import React from "react";
import { MBookList } from "./MBookList";
import MBookItem from "./MBookItem";
import "../book.css";

function MBook() {
  return (
    <div className="book">
        <h1 className="bookTitle">Mystery</h1>
      <div className="bookList">
        {MBookList.map((bookItem, key) => {
          return (
            <MBookItem
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

export default MBook;