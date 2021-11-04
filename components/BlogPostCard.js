import React from 'react';
import styles from "../styles/BlogPostCard.module.css";

const BlogPostCard = ({ imageUrl, title, description, date }) => {
    return (
        <div className={styles.card + " card shadow"}>
            <img src={imageUrl} className={"card-img-top"} alt={"..."} />
                <div className={styles.cardBody + " card-body"}>
                    <div className={"flex-column"}>
                        <h5 className={styles.cardTitle + " card-title"}>{title}</h5>
                        <p className={styles.cardText + " card-text"}>
                            {description}
                        </p>
                        <button className={"customBtn"}>
                            Devamını oku
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default BlogPostCard;