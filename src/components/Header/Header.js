import styles from "./Header.module.css"
import LkLogo from "../../assets/images/lk.svg"
/* import '../../App.css'; */
const Header = () => {
    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.header__inner}>
                    <div className={styles.header__title}>Каталог</div>
                    <div className={styles.header__content}>
                        <div className={styles.header__subtitle}>Сравнение</div>
                        <div className={styles.header__text}>Личный кабинет</div>
                        <img className={styles.header__lkLogo} src={LkLogo} alt=""></img>
                    </div>
                </div>

            </div>

        </div> /*-- /.container --*/
    )
}

export default Header