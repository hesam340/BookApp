import { useState } from "react";
import { books } from "../constants/mockData";

import BookCard from "./BookCard.jsx";
import LikedBooks from "./LikedBooks.jsx";

function Books() {
  const [likedBooks, setLikedBooks] = useState([]);

  const handleLikedBooks = (book, status) => {
    if (!status) {
      setLikedBooks((i) => [...i, book]);
    } else {
      const filteredBooks = likedBooks.filter((i) => i.id !== book.id);
      setLikedBooks(filteredBooks);
    }
  };

  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedBooks={handleLikedBooks}
          />
        ))}
      </div>
      <div>
        {!!likedBooks.length && (
          <div>
            {likedBooks.map((i) => (
              <LikedBooks key={i.id} data={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Books;
