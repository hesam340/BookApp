import styles from "./LikedBooks.module.css";

function LikedBooks({ data: { image, title } }) {
  return (
    <div className={styles.liked}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default LikedBooks;
