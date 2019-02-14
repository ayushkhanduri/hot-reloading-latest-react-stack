import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {incrementCounter} from '../../actions/counter.action';

interface IProps {
    incrementCounter: ()=> {},
    time: number,

}


class CounterComponent extends React.Component <IProps,{}>{
    
    componentDidMount() {
        setInterval(this.props.incrementCounter,1000);
    }


    render() {
        return (
            <h3>{this.props.time}</h3>
        )
    }
}


const mapStateToProps = ({Counter}: {Counter: TimerType.ITimerStore}) => (
    {
        time: Counter.time
    }
)

const mapActionsToProps = (dispatch:any) => (
    bindActionCreators({incrementCounter},dispatch)    
)

export default connect(mapStateToProps,mapActionsToProps)(CounterComponent);