import styles from "./Smartphones.module.css"

type PropsType = {
    onAmountChange: (amount: number) => void
}
const SmartphonesAmount: React.FC<PropsType>  = ({onAmountChange}) => {
    let items:Array<number> = [];
    for (let i = 2; i <= 6; i++) {
        items.push(i);
    }

    return (
        <>{items.map((item, index) =>
            <a className={styles.smartphones__amount} 
            key={index} 
            href="#/" 
            onClick={(e)=>onAmountChange(+(e.target as HTMLInputElement).innerText)}>{item}</a>
        )}</>
    )
}

export default SmartphonesAmount