import React from "react";
import { BookList } from "./BookList";
import BookItem from "./BookItem";
import "../book.css";

function Book() {
  return (
    <div className="book">
        <h1 className="bookTitle">History</h1>
      <div className="bookList">
        {BookList.map((bookItem, key) => {
          return (
            <BookItem
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

export default Book;