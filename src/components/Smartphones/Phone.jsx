import styles from "./Smartphones.module.css"
const Phone = ({ phone, photo }) => {
    return (
        <div className={styles.smartphones__phone}>
            <img className={styles.smartphones__phomeImg} src={photo} alt=""></img>
            <div className={styles.smartphones__phoneName}>{phone}</div>
        </div>

    )
}

export default Phone