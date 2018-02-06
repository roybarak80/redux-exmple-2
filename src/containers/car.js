import React, { Component } from 'react';
import { connect } from 'react-redux';
import { carDetail, clearDetail } from '../actions';
import { bindActionCreators } from 'redux';

class Car extends Component {

    componentWillMount() {
        this.props.carDetail(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clearDetail();
    }

    renderDetail = ({ detail }) => {
        if (detail) {
            return detail.map((item) => {
                return (

                    <div className="col-md-6" key={item.id}>
                        <div className="card flex-md-row mb-4 box-shadow h-md-250">
                            <div className="card-body d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">{item.model}</strong>

                                <div className="mb-1 text-muted">{item.brand}</div>
                                <p className="card-text mb-auto">{item.description}</p>
                                <a href="#">Continue reading</a>
                            </div>
                            <img className="card-img-right flex-auto d-none d-md-block" alt="a" src={`/images/${item.image}`} />
                        </div>
                    </div>


                )
            })
        }
    }
    render() {
        return (
            <div>
                {this.renderDetail(this.props.cars)}

            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);

    return {
        cars: state.cars
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ carDetail, clearDetail }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Car);