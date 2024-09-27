import Header from "../modules/Header";
import Footer from "../modules/Footer";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
