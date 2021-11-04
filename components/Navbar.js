import React from 'react';
import styles from "../styles/Navbar.module.css";
import {usePage} from "./PageContext";
import Link from "next/link";

const Navbar = () => {
    const [page, setPage] = usePage();

    return (
        <div className={styles.navbar + " shadow top-0 sticky-top"}>
            <div className={"container h-100"}>
                <div className={"row h-100 align-items-center justify-content-center g-0"}>
                    <div className={"col-md-8 col-sm-12"}>
                        <h3>Ahmet Eren BOYACI</h3>
                    </div>
                    <div className={"col-md-4 col-sm-12 text-center mb-2 mb-md-0"}>
                        <Link href={"/"}>
                            <a className={page === "home" ? styles.selected : ""} onClick={() => setPage("home")}>Ana Sayfa</a>
                        </Link>
                        <Link href={"/hakkimda"}>
                            <a className={page === "about" ? styles.selected : ""} onClick={() => setPage("about")}>Hakkımda</a>
                        </Link>
                        <Link href={"/iletisim"}>
                            <a className={page === "contact" ? styles.selected : ""} onClick={() => setPage("contact")}>İletişim</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;