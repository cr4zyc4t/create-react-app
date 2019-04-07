import { connect } from "react-redux";

import { increase, decrease, asyncIncrease } from "../../actions/counter";

import Counter from "./Counter";

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  increase, 
  decrease,
  asyncIncrease,
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);