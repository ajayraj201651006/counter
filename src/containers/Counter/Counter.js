import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
   
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.subtractCounter}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
       onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
       onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
       addCounter: () => dispatch({type: 'ADD', value: 5}),
       subtractCounter: () => dispatch({type: 'SUBTRACT', value: 5})     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);