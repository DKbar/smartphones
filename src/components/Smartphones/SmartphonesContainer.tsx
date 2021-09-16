import Smartphones from "./Smartphones"
/* import styles from "./Smartphones.module.css" */
import React from "react";
import { connect } from "react-redux";
import { PhoneDataType } from "../../redux/phone-reducer";
import { AppStateType } from "../../redux/redux-store";

type MapStateToPropsType = {
    phones: Array<PhoneDataType>
}

type MapDispatchToPropsType = {

}

type OwnProps ={

}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnProps

class SmartphonesContainer extends React.Component <PropsType> {
    render() {
        return <div>
               <Smartphones phones={this.props.phones} />
            </div>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        phones: state.phones
    }
}

const mapDispatchToProps = (action: any): MapDispatchToPropsType=> {
    return {

    }
}

export default connect <MapStateToPropsType, MapDispatchToPropsType, OwnProps, AppStateType> (mapStateToProps, mapDispatchToProps)(SmartphonesContainer)