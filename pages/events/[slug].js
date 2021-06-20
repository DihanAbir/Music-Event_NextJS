import Layout from "@/component/Layout";
import { API_URL } from "@/config/index";
import Link from "next/Link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Image from "next/image";
// import EventMap from "@/components/EventMap";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ singelEvnet }) {
  console.log(`singelEvnet`, singelEvnet.evt[0].name);
  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {new Date(singelEvnet.evt[0].date).toLocaleDateString("en-US")} at{" "}
          {singelEvnet.evt[0].time}
        </span>
        <h1>{singelEvnet.evt[0].name}</h1>
        <ToastContainer />
        {/* {singelEvnet.evt[0].image && (
          <div className={styles.image}>
            <Image
              src={singelEvnet.evt[0].image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )} */}

        <h3>Performers:</h3>
        <p>{singelEvnet.evt[0].performer}</p>
        <h3>Description:</h3>
        <p>{singelEvnet.evt[0].description}</p>
        <h3>Venue: {singelEvnet.evt[0].venue}</h3>
        <p>{singelEvnet.evt[0].address}</p>

        {/* <EventMap evt={evt} /> */}

        <Link href="/events">
          <a className={styles.back}>{"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  // console.log(`res`, events);

  return {
    props: { singelEvnet: events },
  };
}
