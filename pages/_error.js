import React from 'react';
import styles from "../styles/Error.module.css";
import Link from "next/link";

const Error = () => {
    return (
        <React.Fragment>
            <div className={styles.height + " d-flex flex-column justify-content-center align-items-center"}>
                <h1 className={"display-3"}>404</h1>
                <h1 className={"display-4"}>Not Found!</h1>
                <Link href={"/"}>
                    <button className={"customBtn"}>Ana sayfaya dön</button>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Error;