import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, description, keyword, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />

      <div className={styles.container}>{children}</div>

      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Musci event",
  keyword: "music",
  description: "Musci event",
};
