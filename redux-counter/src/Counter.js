import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {

  increment = () => {
    this.props.dispatch({type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT'});
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);