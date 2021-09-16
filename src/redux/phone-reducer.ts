import iphone12 from "../assets/images/Apple iPhone 12.svg"
import mi11lite from "../assets/images/Xiaomi Mi 11 Lite.svg"
import galaxya72 from "../assets/images/Samsung Galaxy A72.svg"
import galaxys21 from "../assets/images/Samsung Galaxy S21.svg"
import iphonexr from "../assets/images/Apple iPhone Xr.svg"
import realme8pro from "../assets/images/Realme 8 Pro.svg"




export type PhoneDataType = {
    id: string
    model: string
    photo: string
    manufacturer: string
    releaseYear: number
    screenDiagonal: string
    madeIn: string
    memoryCapacity: string
    screenRefreshRate: string
    nfc: boolean
    esim: boolean
    wirelessCharging: boolean
    cost: string
}

export type InitialStateType= Array<PhoneDataType>
let initialState: InitialStateType = [
    {
        id: "0",
        model: "Apple iPhone 12",
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
        cost: "81 990  ₽",
    },
    {
        id: "1",
        model: "Xiaomi Mi 11 Lite",
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
        model: "Samsung Galaxy A72",
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
        model: "Samsung Galaxy S21",
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
        model: "Apple iPhone Xr",
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
        model: "Realme 8 Pro",
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


const phoneReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}


export default phoneReducer