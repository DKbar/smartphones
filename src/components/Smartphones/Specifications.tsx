import Specification from "./Specification"
import styles from "./Smartphones.module.css"
import { PhoneDataType } from "../../redux/phone-reducer"

type PropsType = {
    phones: Array<PhoneDataType>
}
const Specifications: React.FC<PropsType> = ({phones}) => {
    
    let phoneSpec = phones.map(phone => {
        return (
            <Specification key={phone.id} phone={phone} />
        )
    })
    return (<>
        <div className={styles.specifications}>
            <div className={styles.specifications__inner}>
                <div>Производитель</div>
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
        <div className={styles.phoneSpec}> 
            {phoneSpec}
        </div>
            

           
        </div>

    </>
    )
}

export default Specifications