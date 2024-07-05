import { useState } from "react";
import { books } from "../constants/mockData";

import BookCard from "./BookCard.jsx";
import LikedBooks from "./LikedBooks.jsx";

import styles from "./Books.module.css";

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
    <div className={styles.container}>
      <div className={styles.card}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            handleLikedBooks={handleLikedBooks}
          />
        ))}
      </div>
      {!!likedBooks.length && (
        <div className={styles.favorite}>
          <h4>Favorites :</h4>
          {likedBooks.map((i) => (
            <LikedBooks key={i.id} data={i} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
