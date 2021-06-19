import Link from "next/Link";

import Layout from "../component/Layout";

export default function HomePage() {
  return (
    <Layout>
      <div>
        <p>Home</p>
        <Link href="/about">About</Link>
      </div>
    </Layout>
  );
}
