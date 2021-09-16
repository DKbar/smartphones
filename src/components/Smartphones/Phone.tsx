import styles from "./Smartphones.module.css"

type PropsType = {
    model: string
    photo: string
}
const Phone: React.FC<PropsType> = ({ model, photo }) => {
    return (
        <div className={styles.smartphones__phone}>
            <img className={styles.smartphones__phoneImg} src={photo} alt=""></img>
            <div className={styles.smartphones__phoneName}>{model}</div>
        </div>

    )
}

export default Phone