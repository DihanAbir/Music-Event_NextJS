import Layout from "@/component/Layout";
import styles from "@/styles/404.module.css";

function NotFoundPage() {
  return (
    <Layout>
      <div className={styles.error}>
        <p>Page NotFoundPage</p>
        <h1>404!</h1>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
