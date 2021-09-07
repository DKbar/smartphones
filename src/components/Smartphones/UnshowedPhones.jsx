import logo from "../../assets/images/chevron_small.svg"
import styles from "./UnshowedPhones.module.css"
import { useState } from "react";
import UnshowedPhonesList from "./UnshowedPhonesList";

const UnshowedPhones = ({id, phones, onPhoneChange }) => {
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

                    {/*                     <p onClick={onClick}>Home</p>
                    <p onClick={onClick}>Car</p>
                    <p onClick={onClick}>Sport</p>
                    <p onClick={onClick}>...</p> */}
                </div>
            </span>
        </div>
    )
}


export default UnshowedPhones