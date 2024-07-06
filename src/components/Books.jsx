import { useState } from "react";
import { books as booksData } from "../constants/mockData";

import BookCard from "./BookCard.jsx";
import LikedBooks from "./LikedBooks.jsx";

import styles from "./Books.module.css";
import Search from "./Search.jsx";

function Books() {
  const [likedBooks, setLikedBooks] = useState([]);
  const [books, setBooks] = useState(booksData);
  const [searchValue, setSearchValue] = useState("");

  const handleLikedBooks = (book, status) => {
    if (!status) {
      setLikedBooks((i) => [...i, book]);
    } else {
      const filteredBooks = likedBooks.filter((i) => i.id !== book.id);
      setLikedBooks(filteredBooks);
    }
  };

  const searchHandler = () => {
    if (searchValue) {
      const searchedBooks = booksData.filter((i) =>
        i.title.toLowerCase().includes(searchValue)
      );
      setBooks(searchedBooks);
    } else {
      setBooks(booksData);
    }
  };

  return (
    <>
      <Search
        value={searchValue}
        setSearchValue={setSearchValue}
        searchHandler={searchHandler}
      />
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
    </>
  );
}

export default Books;
