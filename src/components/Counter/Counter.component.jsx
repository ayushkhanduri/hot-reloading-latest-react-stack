import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {incrementCounter} from '../../actions/counter.action';

import PropTypes from 'prop-types';

class CounterComponent extends Component{
    
    componentDidMount() {
        setInterval(this.props.incrementCounter,1000);
    }


    render() {
        return (
            <h3>{this.props.time}</h3>
        )
    }
}

CounterComponent.propTypes = {
    time: PropTypes.number
}


const mapStateToProps = ({Counter}) => (
    {
        time: Counter.time
    }
)

const mapActionsToProps = dispatch => (
    bindActionCreators({incrementCounter},dispatch)    
)

export default connect(mapStateToProps,mapActionsToProps)(CounterComponent);