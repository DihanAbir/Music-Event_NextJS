import Link from "next/Link";

import Layout from "../component/Layout";

export default function about() {
  return (
    <Layout title="About Music">
      <p>About page</p>
      <Link href="/">Home</Link>
    </Layout>
  );
}
