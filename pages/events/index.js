import Link from "next/Link";
import { API_URL } from "@/config/index";

import Layout from "@/component/Layout";
import EventItem from "@/component/EventItem";
import styles from "@/styles/Event.module.css";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <div>
        <div className={styles.headerEvent}>
          <input className="search" placeholder="Search..." type="search" />
          <button className="btn btn-secondary">Create New</button>
        </div>

        <p>EventsPage</p>
        <Link href="/about">About</Link>
        <h5>Upcomming events</h5>
        <br />
        <hr />
        <br />
        <small>Total: {events.events.length}</small>
        {events.events.length === 0 && <h4>There is no event. </h4>}
        {events.events.slice(0, 3).map((event) => (
          <EventItem event={event} key={event.id} />
          // <p>{event.name}</p>
        ))}
        <Link href="/">
          <a className="btn-secondary">Home</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events },
  };
}
