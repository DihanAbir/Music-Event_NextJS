import Link from "next/Link";
import { API_URL } from "@/config/index";

import Layout from "../component/Layout";
import EventItem from "../component/EventItem";
import styles from "@/styles/Event.module.css";
import { useEffect, useState } from "react";

export default function HomePage({ events }) {
  const [card, setCard] = useState(events.events);
  console.log(`card`, card);
  const [searchvalue, setSearchvalue] = useState("");

  const searchedValue = card.filter((val) => {
    if (searchvalue === "") {
      return val;
    } else if (val.name.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    } else if (
      val.performer.toLowerCase().includes(searchvalue.toLowerCase())
    ) {
      return val;
    } else if (val.venue.toLowerCase().includes(searchvalue.toLowerCase())) {
      return val;
    }
  });

  useEffect(() => {}, [searchvalue]);

  return (
    <Layout>
      <div>
        <div className={styles.headerEvent}>
          <input
            onChange={(e) => setSearchvalue(e.target.value)}
            className="search"
            placeholder="Search..."
            type="search"
          />
          <button className="btn btn-secondary">Create New</button>
        </div>
        <Link href="/about">About</Link>
        <h5>Upcomming events</h5>
        <br />
        <hr />

        <br />
        <small>Total: {events.events.length}</small>
        {searchedValue.length === 0 && <h4>There is no event. </h4>}
        {searchedValue.map((event) => (
          <EventItem event={event} key={event.id} />
          // <p>{event.name}</p>
        ))}
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
