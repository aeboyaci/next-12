import React from 'react';
import styles from "../styles/Error.module.css";

const Error = () => {
    return (
        <React.Fragment>
            <div className={styles.height + " flex-column justify-content-center align-items-center"}>
                <h1 className={"display-3"}>404</h1>
                <h1 className={"display-4"}>Not Found!</h1>
            </div>
        </React.Fragment>
    );
};

export default Error;