function LikedBooks({ data: { image, title } }) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default LikedBooks;
