import Smartphones from "./Smartphones"
/* import styles from "./Smartphones.module.css" */
import React from "react";
import { connect } from "react-redux";

class SmartphonesContainer extends React.Component {
    render() {
        return (
            <div>
               <Smartphones phones={this.props.phones}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.phones
    }
}

const mapDispatchToProps = (action) => {
    return {

    }
}

export default connect (mapStateToProps, mapDispatchToProps)(SmartphonesContainer)