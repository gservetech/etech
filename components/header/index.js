import Ad from "./Ad";
import Top from "./Top";
import Main from "./Main";
import styles from "./styles.module.scss";

export default function Header({ country, searchHandler }) {
  return (
    <header className={styles.header}>TEST
      <Ad />
  {/*     <Top country= { country }/>
      <Main  /> */}
    </header>
  );
}