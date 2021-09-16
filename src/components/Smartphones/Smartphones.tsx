import Phone from "./Phone"
import { useState } from "react"
import styles from "./Smartphones.module.css"
import SmartphonesAmount from "./SmartphonesAmount"
import UnshowedPhones from "./UnshowedPhones"
import Specifications from "./Specifications"
import { PhoneDataType } from "../../redux/phone-reducer"

type PropsType = {
    phones: Array<PhoneDataType>
}

const Smartphones: React.FC<PropsType> = ({phones}) => {
    
    const allPhones = phones
    const [amount, setAmount] = useState<any>(3)
    let [showedPhones, setShowedPhones] = useState(allPhones.slice(0, amount))
    let [unshowedPhones, setUnshowedPhones] = useState([...allPhones].splice(amount))

    let onAmountChange = (amount: any) => {
        setAmount(amount)
        setShowedPhones(allPhones.slice(0, amount))
        setUnshowedPhones([...allPhones].splice(amount))
    }

    let onPhoneChange = (id:string, id1:string) => {
        setShowedPhones(
            showedPhones.map(phone => phone.id === id ?
                unshowedPhones.filter(phone => phone.id === id1)[0]
                : phone)
        )
        setUnshowedPhones(unshowedPhones.map(phone => phone.id === id1 ?
                    phones.filter(phone => phone.id === id)[0]
                    : phone)
                )
    }


    let phonesShow = showedPhones.map(phone => {
        return (
            <div key={phone.id} className={styles.smartphones__phones}>
                <Phone
                    model={phone.model}
                    photo={phone.photo}

                />
                {amount < 6 ? <UnshowedPhones id={phone.id} onPhoneChange={onPhoneChange} phones={unshowedPhones} /> : null}
           
           
            </div>
        )

    })
    return (
        <div className={styles.smartphones}>
            <div className='container'>
                <div className={styles.smartphones_inner}>
                    <div className={styles.smartphones__text}>
                        <div className={styles.smartphones__title}>Смартфоны</div>
                        <div className={styles.smartphones__filter}>
                            Отобразить товары: <SmartphonesAmount onAmountChange={onAmountChange} />
                        </div>
                    </div>
                    <div className={styles.smartphones__comparison}>
                        <div className={styles.smartphones__differences}>
                            <input className={styles.smartphones__checkbox} type="checkbox" />
                            <div className={styles.smartphones__checktext}>Показать различия</div>
                        </div>{phonesShow}
                    </div>
                </div>
                </div>
                <div className={styles.smartphones__bord}>
                <div className='container'>
                  <Specifications phones = {showedPhones} />  
                </div>
                </div>

               
            


        </div>
    )
}

export default Smartphones