import React from "react";
import { connect } from "react-redux";
import * as CounterCreators from '/study/React/redux-28-07/src/actions/counterCreators';
import * as CounterCreators from "./actions/counterCreators";

function App(props) {
  const { count, step, dispatch } = props;
  const increment = () => {
    dispatch(CounterCreators.increment());
  };
  const decrement = () => {
    dispatch(CounterCreators.decrement());
  };
  const handlerStep = ({target:{value}}) =>{
    dispatch(CounterCreators.setStep(Number(value)));
  }
  //alert('app')
  const { count, step, increment, decrement, setStep } = props;
  const handlerStep = ({ target: { value } }) => { setStep(Number(value));  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={handlerStep}/>
      <input type="number" value={step} onChange={handlerStep} />
    </div>
  );
}

const mapStateToProps = ({count, step}) => ({count, step})

export default connect(mapStateToProps)(App);
const mapStateToProps = ({ count, step }) => ({ count, step });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(CounterCreators.increment()),
  decrement: () => dispatch(CounterCreators.decrement()),
  setStep: (newStep) => dispatch(CounterCreators.setStep(newStep)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

