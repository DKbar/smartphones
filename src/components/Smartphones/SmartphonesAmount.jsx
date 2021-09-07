import styles from "./Smartphones.module.css"
const SmartphonesAmount = ({onClick}) => {
    let items = [];
    for (let i = 2; i <= 6; i++) {
        items.push(i);
    }

    return (
        <>{items.map((item, index) =>
            <a className={styles.smartphones__amount} 
            key={index} 
            href="#/" 
            onClick={(e)=>onClick(+e.target.innerText)}>{item}</a>
        )}</>
    )
}

export default SmartphonesAmount