import styles from "./Smartphones.module.css"
import supported from "../../assets/images/supported.png" 
import unsupported from "../../assets/images/unsupported.png" 
import { PhoneDataType } from "../../redux/phone-reducer"

type PropsType ={
    phone: PhoneDataType
}
const Specification: React.FC<PropsType> = ({phone}) => {
    
    return (
        <div className={styles.specifications__items}>
            <div>{phone.manufacturer}</div>
            <div>{phone.releaseYear}</div>
            <div>{phone.screenDiagonal}</div>
            <div>{phone.madeIn}</div>
            <div>{phone.memoryCapacity}</div>
            <div>{phone.screenRefreshRate}</div>
            <div><img src={phone.nfc ? supported : unsupported}  alt=""></img></div>
            <div><img src={phone.esim ? supported : unsupported}  alt=""></img></div>
            <div><img src={phone.wirelessCharging ? supported : unsupported}  alt=""></img></div>
            <div>{phone.cost}</div>
        </div>

    )
}

export default Specification