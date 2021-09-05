import React from "react"
import { connect } from "react-redux"
import Specifications from "./Specifications"

class SpecificationContainer extends React.Component{

    render(){
        return (
            <Specifications phones={this.props.phones} />
            )
        
    }
}
const mapStateToProps = (state) => {
    return{
        phones: state.phones
    }
}
export default connect(mapStateToProps)(SpecificationContainer)