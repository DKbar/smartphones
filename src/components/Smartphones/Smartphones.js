import Phone from "./Phone"
import styles from "./Smartphones.module.css"

const Smartphones = (props) => {

    let phones = props.phones.map(phone => {
        return (
            <Phone
                key={phone.id}
                phone={phone.phone}
                photo={phone.photo}
            />
        )

    })
    return (
        <div className={styles.smartphones}>
            <div className={styles.smartphones__inner}>
                <div className={styles.smartphones__title}>Смартфоны</div>
                <div className={styles.smartphones__filter}>Отобразить товары</div>
                <div className={styles.smartphones__text}>
                    <input className={styles.smartphones__checkbox} type="checkbox" />
                    <div>Показать различия</div>
                </div>
                <div className={styles.smartphones__phones}>

                    {phones}
                </div>
            </div>

        </div>
    )
}

export default Smartphones