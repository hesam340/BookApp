import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Book App</h1>
        <p>
          <a href="https://botostart.ir/">Botostart</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer>
        <p>Developed By Hesam khaki with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
