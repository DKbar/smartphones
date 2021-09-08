import Phone from "./Phone"
import { useState } from "react"
import styles from "./Smartphones.module.css"
import SmartphonesAmount from "./SmartphonesAmount"
import UnshowedPhones from "./UnshowedPhones"
import Specifications from "./Specifications"


const Smartphones = (props) => {
    
    const allPhones = props.phones
    const [amount, setAmount] = useState(3)
    let [showedPhones, setShowedPhones] = useState(allPhones.slice(0, amount))
    let [unshowedPhones, setUnshowedPhones] = useState([...allPhones].splice(amount))

    let onClick = (amount) => {
        
        setAmount(amount)
        setShowedPhones(allPhones.slice(0, amount))
        setUnshowedPhones([...allPhones].splice(amount))
    }

    let onPhoneChange = (id, id1) => {
        setShowedPhones(
            showedPhones.map(phone => phone.id === id ?
                unshowedPhones.filter(phone => phone.id === id1)[0]
                : phone)
        )
        setUnshowedPhones(unshowedPhones.map(phone => phone.id === id1 ?
                    props.phones.filter(phone => phone.id === id)[0]
                    : phone)
                )
    }

    let phones = showedPhones.map(phone => {
        return (
            <div key={phone.id} className={styles.smartphones__phones}>
                <Phone
                    phone={phone.phone}
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
                            Отобразить товары: <SmartphonesAmount onClick={onClick} />
                        </div>
                    </div>
                    <div className={styles.smartphones__comparison}>
                        <div className={styles.smartphones__differences}>
                            <input className={styles.smartphones__checkbox} type="checkbox" />
                            <div className={styles.smartphones__checktext}>Показать различия</div>
                        </div>{phones}
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