import styles from "./Header.module.css"
import LkLogo from "../../assets/images/lk.svg"

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header__inner}>
                <div className={styles.header__title}>Каталог</div>
                <div className={styles.header__subtitle}>Сравнение</div>
                <div className={styles.header__text}>
                    <div>Личный кабинет</div>
                    
                </div>
                <img className={styles.header__lkLogo} src={LkLogo} alt=""></img>
            </div>
        </div>
    )
}

export default Header