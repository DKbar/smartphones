import logo from "../../assets/images/change.svg"
import { PhoneDataType } from "../../redux/phone-reducer"
import styles from "./UnshowedPhones.module.css"

type PropsType = {
    phones: Array<PhoneDataType>
    id: string
    onPhoneChange: (id: string, phoneId: string) => void
}

const UnshowedPhonesList: React.FC<PropsType> = ({phones, id, onPhoneChange}) => {
    
    return (
    <div>
        {phones.map(phone => {
        return (
        <div key={phone.id} className={styles.unshowed__phones}>
            <img src={logo} alt="" className={styles.unshowed__phones__logo}
            onClick={()=>onPhoneChange(id, phone.id)}></img>
            <img src={phone.photo} alt=""  className={styles.unshowed__phones__photo}/>
            <span className={styles.unshowed__phones__photo}>{phone.model} </span>  
                
        </div>     
        )})}
    </div>
    )
}


export default UnshowedPhonesList