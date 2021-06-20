import Link from "next/Link";
import Image from "next/image";

import styles from "../styles/EventItem.module.css";

export default function EventItem({ event }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <h2 className={styles.name}>{event.name}</h2>
        <p>{event.image}</p>
        <p>{event.performer}</p>
        <div className={styles.date}>
          <p>{event.time}</p>
          <p>{event.date}</p>
        </div>
        <b className={styles.des}> Place || {event.venue}</b>
        {/* <Image
          //   loader={myLoader}
          src="me.png"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        <div className={styles.link}>
          <Link href={`/events/${event.slug}`}>
            <a className="btn"> Details</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
