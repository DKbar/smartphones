import logo from "../../assets/images/chevron_small.svg"
import styles from "./UnshowedPhones.module.css"
import { useState } from "react";
import UnshowedPhonesList from "./UnshowedPhonesList";
import { PhoneDataType } from "../../redux/phone-reducer";

type PropsType = {
    id: string
    phones: Array<PhoneDataType>
    onPhoneChange: (id: string, phoneId: string) => void
}

const UnshowedPhones: React.FC<PropsType> = ({id, phones, onPhoneChange }) => {
    let [active, setActive] = useState(false);
    let onClick = () => {
        setActive(!active);
    }
    return (

        <div className={styles.items}>
            <span className={styles['button-wrap']}>
                <img src={logo} alt="" onClick={onClick}></img>
                <div className={active ? styles.active : styles.hidden}  >
                    <div>
                        <input className={styles.search}></input>
                    </div>
                    <UnshowedPhonesList id={id} phones={phones} onPhoneChange={onPhoneChange} />
                </div>
            </span>
        </div>
    )
}


export default UnshowedPhones