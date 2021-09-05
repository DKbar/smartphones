import iphone12 from "../assets/images/Apple iPhone 12.png"
import mi11lite from "../assets/images/Xiaomi Mi 11 Lite.png"
import galaxya72 from "../assets/images/Samsung Galaxy A72.png"
import galaxys21 from "../assets/images/Samsung Galaxy S21.png"
import iphonexr from "../assets/images/Apple iPhone Xr.png"
import realme8pro from "../assets/images/Realme 8 Pro.png"


let initialState = [
    {
        id: "0",
        phone: "Apple iPhone 12",
        photo: iphone12,
        manufacturer: "Apple",
        releaseYear: 2020,
        screenDiagonal: "6,1",
        madeIn: "Китай",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "60 Гц",
        nfc: false,
        esim: true,
        wirelessCharging: true,
        cost: "81 990  ₽"
    },
    {
        id: "1",
        phone: "Xiaomi Mi 11 Lite",
        photo: mi11lite,
        manufacturer: "Xiaomi",
        releaseYear: 2021,
        screenDiagonal: "6,55",
        madeIn: "Китай",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "90 Гц",
        nfc: true,
        esim: true,
        wirelessCharging: false,
        cost: "27 490 ₽"
    },
    {
        id: "2",
        phone: "Samsung Galaxy A72",
        photo: galaxya72,
        manufacturer: "Samsung",
        releaseYear: 2021,
        screenDiagonal: "6,7",
        madeIn: "Вьетнам",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "90 Гц",
        nfc: true,
        esim: false,
        wirelessCharging: true,
        cost: "32 890 ₽"
    },
    {
        id: "3",
        phone: "Samsung Galaxy S21",
        photo: galaxys21,
        manufacturer: "Samsung",
        releaseYear: 2021,
        screenDiagonal: "6,2",
        madeIn: "Вьетнам",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "120 Гц",
        nfc: true,
        esim: true,
        wirelessCharging: true,
        cost: "64 799 ₽"
    },
    {
        id: "4",
        phone: "Apple iPhone Xr",
        photo: iphonexr,
        manufacturer: "Apple",
        releaseYear: 2018,
        screenDiagonal: "6,1",
        madeIn: "Китай",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "60 Гц",
        nfc: true,
        esim: true,
        wirelessCharging: true,
        cost: "47 999 ₽"
    },
    {
        id: "5",
        phone: "Realme 8 Pro",
        photo: realme8pro,
        manufacturer: "Realme",
        releaseYear: 2021,
        screenDiagonal: "6,4",
        madeIn: "Китай",
        memoryCapacity: "128 Гб",
        screenRefreshRate: "60 Гц",
        nfc: true,
        esim: false,
        wirelessCharging: false,
        cost: "24 999 ₽"
    },

]


const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default phoneReducer