import React from 'react'
import styles from '/styles/VideoCard.module.css';

const Information = ({ video, title, description }) => {
  return (
    <div>
    <div className={styles.card}>
      <video src={video} className={styles.video} />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
    </div>
  );
};

export default Information