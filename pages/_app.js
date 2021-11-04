import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import dynamic from 'next/dynamic';
import {PageContext} from "../components/PageContext";
import Navbar from "../components/Navbar";

const BootstrapJsFileImport = dynamic(
    () => import('bootstrap/dist/js/bootstrap.bundle'),
    {ssr: false}
)

function MyApp({Component, pageProps}) {
    const [page, setPage] = useState("home");

    console.log(Component.name);

    return (
        Component.name === "error" ? <Component {...pageProps} /> :
            <PageContext.Provider value={[page, setPage]}>
                <Navbar />
                <Component {...pageProps}>
                    <BootstrapJsFileImport/>
                </Component>
            </PageContext.Provider>
    )
}

export default MyApp
