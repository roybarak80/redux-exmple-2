
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllCars } from '../actions';
import { bindActionCreators } from 'redux';

class Carslist extends Component {

    componentWillMount() {
        this.props.getAllCars()
    }
    carsListRender = () => {
        
            console.log('goo' + this.props.cars)


        
    }

    render() {
        return (
            <div>
                {this.carsListRender()}

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        list_cars: state.list_cars
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllCars }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Carslist);