import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import React from "react";

// var link = window.location.href;
// var id_ = substring(link.indexOf("/"));

class Test extends React.Component {
  render() {
    var sty = {
      fontSize: "30px",
      fontFamily: "Lucida Sans Unicode"
    };
    var sty2 = {
      width: "31%",
      height: "350px",
      margin: "10px"
    };
    return (
      <div>
        <center>
          <h3 style={sty}>What Others are Saying</h3>
        </center>
        <hr></hr>
        <p>number of reviews reviews</p>
        <hr></hr>
        <p>Most Recent Reviews</p>
        <input style={sty2} />
        <input style={sty2} />
        <input style={sty2} />
      </div>
    );
  }
}
ReactDOM.render(<Test />, document.getElementById("review"));
export default Test;
