import Link from "next/link";
import styles from "./styles.module.scss";
import Image from 'next/image';

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((k, i) => (
        <ul key={key}>
          {i === 0 ? (
            <Image src="../../../logo.png" />
          
          ) : (
            <b>{link.heading}</b>
          )}
          {links.map((key,link) => (
            <li key={key}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        name: "About us",
        link: "https://www.google.com/",
      },
      {
        name: "Contact us",
        link: "https://www.google.com/",
      },
      {
        name: "Social Responsibility",
        link: "https://www.google.com/",
      },
      {
        name: "",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        name: "Shipping Info",
        link: "https://www.google.com/",
      },
      {
        name: "Returns",
        link: "https://www.google.com/",
      },
      {
        name: "How To Order",
        link: "https://www.google.com/",
      },
      {
        name: "How To Track",
        link: "https://www.google.com/",
      },
      {
        name: "Size Guide",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        name: "Customer service",
        link: "https://www.google.com/",
      },
      {
        name: "Terms and Conditions",
        link: "https://www.google.com/",
      },
      {
        name: "Consumers (Transactions)",
        link: "https://www.google.com/",
      },
      {
        name: "Take our feedback survey",
        link: "https://www.google.com/",
      },
    ],
  },
];