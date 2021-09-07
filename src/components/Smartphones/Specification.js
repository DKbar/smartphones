import styles from "./Smartphones.module.css"
import supported from "../../assets/images/supported.png" 
import unsupported from "../../assets/images/unsupported.png" 
const Specification = (props) => {
    debugger
    return (
        <div /* className={styles.specifications__inner} */>
            <div >{props.phone.manufacturer}</div>
            <div >{props.phone.releaseYear}</div>
            <div >{props.phone.screenDiagonal}</div>
            <div >{props.phone.madeIn}</div>
            <div >{props.phone.memoryCapacity}</div>
            <div >{props.phone.screenRefreshRate}</div>
            <div> <img src={props.phone.nfc ? supported : unsupported}  alt=""></img></div>
            <div> <img src={props.phone.esim ? supported : unsupported}  alt=""></img></div>
            <div> <img src={props.phone.wirelessCharging ? supported : unsupported}  alt=""></img></div>
            <div >{props.phone.cost}</div>
        </div>

    )
}

export default Specification