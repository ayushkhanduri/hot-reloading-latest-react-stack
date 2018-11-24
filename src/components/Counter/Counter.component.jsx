import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {incrementCounter} from '../../actions/counter.action';


type Dispatcher = () => {};

type CounterProps= {
    time: number,
    incrementCounter: Dispatcher
}

class CounterComponent extends Component<CounterProps,{}>{
    
    componentDidMount() {
        setInterval(this.props.incrementCounter(),1000);
    }


    render() {
        return (
            <h3>{this.props.time}</h3>
        )
    }
}


const mapStateToProps = ({counter}) => (
    {
        time: counter.time
    }
)

const mapActionsToProps = (dispatch) => (
    {
        bindActionCreators({incrementCounter})
    }
)

export default connect(mapStateToProps,mapActionsToProps)(CounterComponent);