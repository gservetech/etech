import Link from "next/link";
import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";

export default function Main({ searchHandler }) {

    return (
        <div className={styles.main}>
            <div className={styles.main__container}>

                <Link href="/" className={styles.logo}>
                    <img src="../../../logo.png" alt="" />
                </Link>

                <form onSubmit={(e) => handleSearch(e)} className={styles.search}>
                    <input
                        type="text"
                        placeholder="Search..."

                    />
                    <button type="submit" className={styles.search__icon}>
                        <RiSearch2Line />
                    </button>
                </form>
                <Link href="/cart" className={styles.cart}>
                    <FaOpencart />
                    <span>0</span>
                </Link>
            </div>
        </div>
    );
}