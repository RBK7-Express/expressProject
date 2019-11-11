import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Test extends React.Component {
  render() {
    return (
      <div>
        <h3>What Others are Saying</h3>
        <hr></hr>
        <h5>number of reviews reviews</h5>
        <hr></hr>
      </div>
    );
  }
}
ReactDOM.render(<Test />, document.getElementById("review"));
export default Test;
