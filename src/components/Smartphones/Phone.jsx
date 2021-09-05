const Phone = ({ phone, photo }) => {
    return (
        <div>
            <img src={photo} alt=""></img>
            <div>{phone}</div>
        </div>

    )
}

export default Phone