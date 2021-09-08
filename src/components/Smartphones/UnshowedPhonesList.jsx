import logo from "../../assets/images/change.svg"
import styles from "./UnshowedPhones.module.css"

const UnshowedPhonesList = (props) => {
    
    return (
    <div>
        {props.phones.map(phone => {
        return (
        <div key={phone.id} className={styles.unshowed__phones}>
            <img src={logo} alt="" className={styles.unshowed__phones__logo}
            onClick={()=>props.onPhoneChange(props.id, phone.id)}></img>
            <img src={phone.photo} alt=""  className={styles.unshowed__phones__photo}/>
            <span className={styles.unshowed__phones__photo}>{phone.phone} </span>  
                
        </div>     
        )})}
    </div>
    )
}


export default UnshowedPhonesList