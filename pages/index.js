import React from "react";
import Head from "next/head";
import BlogPostCard from "../components/BlogPostCard";

const lorem = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

export default function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Ana Sayfa - Ahmet Eren BOYACI</title>
            </Head>
            <div className={"container mt-md-5 mt-3"}>
                <h3 className={"mb-3"}>Gönderiler</h3>
                <div className={"row"}>
                    <div className={"col-md-4 col-sm-12 pb-4"}>
                        <BlogPostCard
                            imageUrl={"https://ahmeterenboyaci.com/static/malware.webp"}
                            title={"Blog Title"}
                            description={lorem}
                            date={"04/11/2021"}
                        />
                    </div>
                    <div className={"col-md-4 col-sm-12 pb-4"}>
                        <BlogPostCard
                            imageUrl={"https://ahmeterenboyaci.com/static/malware.webp"}
                            title={"Blog Title"}
                            description={lorem}
                            date={"04/11/2021"}
                        />
                    </div>
                    <div className={"col-md-4 col-sm-12 pb-4"}>
                        <BlogPostCard
                            imageUrl={"https://ahmeterenboyaci.com/static/malware.webp"}
                            title={"Blog Title"}
                            description={lorem}
                            date={"04/11/2021"}
                        />
                    </div>
                    <div className={"col-md-4 col-sm-12 pb-4"}>
                        <BlogPostCard
                            imageUrl={"https://ahmeterenboyaci.com/static/malware.webp"}
                            title={"Blog Title"}
                            description={lorem}
                            date={"04/11/2021"}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
