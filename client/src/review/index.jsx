import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import React from "react";

// var link = window.location.href;
// var id_ = substring(link.indexOf("/"));

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", reviews: "" };
  }

  componentDidMount() {
    var that = this;
    var path = window.location.href;
    var id_ = path.substring(path.indexOf("=") + 1);
    if (id_ === "") {
      id_ = 1;
    }
    console.log(id_);
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/id/?id=" + that.state.id,
      data: { id: id_ },
      // dataType: "application/json",
      success: function(data) {
        that.setState({ id: data.id, reviews: data.reviews });
        console.log("DONE!");
      },
      error: function(err) {
        console.log(err, "kjhsdkajs");
      }
    });
  }

  render() {
    var sty = {
      fontSize: "30px",
      fontFamily: "Lucida Sans Unicode"
    };
    var sty2 = {
      width: "31%",
      height: "350px",
      margin: "10px",
      border: "1px solid black"
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
        <p style={sty2}>{this.state.reviews[0]} </p>
        <p style={sty2}>{this.state.reviews[1]} </p>
        <p style={sty2}>{this.state.reviews[2]} </p>
      </div>
    );
  }
}
ReactDOM.render(<Test />, document.getElementById("review"));
export default Test;
