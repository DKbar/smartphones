import Specification from "./Specification"
import styles from "./Smartphones.module.css"

const Specifications = (props) => {
    
    let phoneSpec = props.phones.map(phone => {
        return (
            <Specification key={phone.id} phone={phone} />
        )
    })
    return (<>
        <div className={styles.specifications}>
            <div className={styles.specifications__inner}>
                <p>Производитель</p>
                <div>Год релиза</div>
                <div>Диагональ экрана (дюйм)</div>
                <div>Страна-производитель</div>
                <div>Объем памяти</div>
                <div>частота обновления экрана</div>
                <div>NFC</div>
                <div>Поддержка ESIM</div>
                <div>Поддержка безпроводной зарядки</div>
                <div>Стоимость</div>
            </div>
            {phoneSpec}
        </div>

    </>
    )
}

export default Specifications