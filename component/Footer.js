import Link from "next/Link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Dihan!</p>
      <p>
        {" "}
        <Link href="/">Home</Link> ||
        <Link href="/about"> About Us</Link>
      </p>
    </footer>
  );
}

export default Footer;
