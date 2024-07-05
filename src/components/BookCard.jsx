import { FaHeart } from "react-icons/fa";

import styles from "./BookCard.module.css";
import { useState } from "react";

function BookCard({ data, handleLikedBooks }) {
  const { title, author, image, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLikedBooks(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <FaHeart color={like ? "red" : "#dbd8d8"} fontSize="1.8rem" />
      </button>
    </div>
  );
}

export default BookCard;
