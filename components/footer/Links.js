import Link from "next/link";
import styles from "./styles.module.scss";
import Image from 'next/image';

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {/* {links.map((key, i) => (
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
      ))} */}
    </div>
  );
}
const links = [
  {
    heading: "SHOPPAY",
    links: [
      {
        key:"1",
        name: "About us",
        link: "https://www.google.com/",
      },
      {
        key:"2",
        name: "Contact us",
        link: "https://www.google.com/",
      },
      {
        key:"3",
        name: "Social Responsibility",
        link: "https://www.google.com/",
      },
      {
        key:"4",
        name: "ddd",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    heading: "HELP & SUPPORT",
    links: [
      {
        key:"45",
        name: "Shipping Info",
        link: "https://www.google.com/",
      },
      {
        key:"48",
        name: "Returns",
        link: "https://www.google.com/",
      },
      {
        key:"43",
        name: "How To Order",
        link: "https://www.google.com/",
      },
      {
        key:"33",
        name: "How To Track",
        link: "https://www.google.com/",
      },
      {
        key:"443",
        name: "Size Guide",
        link: "https://www.google.com/",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        key:"4433333",
        name: "Customer service",
        link: "https://www.google.com/",
      },
      {
        key:"44333",
        name: "Terms and Conditions",
        link: "https://www.google.com/",
      },
      {
        key:"443333",
        name: "Consumers (Transactions)",
        link: "https://www.google.com/",
      },
      {
        key:"44333",
        name: "Take our feedback survey",
        link: "https://www.google.com/",
      },
    ],
  },
];