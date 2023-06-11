import Link from "next/link";
import styles from "./styles.module.scss";
import { IoLocationSharp } from "react-icons/io5";
export default function Copyright({ country }) {
  return (
    <div className={styles.footer__copyright}>
      <section>©2022 SHOPPAY All Rights Resereved.</section>
      <section>
        <ul>
          {data.map((key,link) => (
            <li key={key}>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
          <li>
            <a>
              <IoLocationSharp /> { country.name }
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
const data = [
  {
    key:"1",
    name: "Privacy Center",
    link: "https://www.google.com/",
  },
  {
    key:"2",
    name: "Privacy & Cookie Policy",
    link: "https://www.google.com/",
  },
  {
    key:"3",
    name: "Manage Cookies",
    link: "https://www.google.com/",
  },
  {
    key:"4",
    name: "Terms & Conditions",
    link: "https://www.google.com/",
  },
  {
    key:"5",
    name: "Copyright Notice",
    link: "https://www.google.com/",
  },
];