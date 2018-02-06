import React, { Component } from 'react';
import {connect } from 'react-redux';
import {getAllCars} from '../actions';
import {bindActionCreators} from 'redux';

    class Carslist extends Component {
    
        componentWillMount(){
            this.props.getAllCars()
        }
    

        render() {
            return (
                <div>
                   123
                  
                </div>
            );
        }
    }
    
  
    
    
    export default Carslist;