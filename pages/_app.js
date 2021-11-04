import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import dynamic from 'next/dynamic';
import {PageContext} from "../components/PageContext";
import Navbar from "../components/Navbar";
import {Router} from "next/router";

const BootstrapJsFileImport = dynamic(
    () => import('bootstrap/dist/js/bootstrap.bundle'),
    {ssr: false}
)

function MyApp({Component, pageProps}) {
    const [page, setPage] = useState("/");

    console.log(Component);
    Router.events.on('routeChangeStart', (e) => {
        setPage(e);
        console.log(e);
    });

    return (
        Component.name === "Error" ? <Component {...pageProps} /> :
            <PageContext.Provider value={[page, setPage]}>
                <Navbar />
                <Component {...pageProps}>
                    <BootstrapJsFileImport/>
                </Component>
            </PageContext.Provider>
    )
}

export default MyApp
