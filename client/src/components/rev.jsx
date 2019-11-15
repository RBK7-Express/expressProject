import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
// import React from "react";

// var link = window.location.href;
// var id_ = substring(link.indexOf("/"));

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", reviews: [] };
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
      border: "0.5px solid black"
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
        <div>
          {/* this.state.reviews */}
          {this.state.reviews.map((item, i) => {
            return (
              <div className="row2">
                <span className="column" key={i}>
                  ★★★★★
                  <br /> {item}
                  <br />
                  <div id="forSpan">
                    <img src="https://i.ibb.co/NjV2vj7/Capture.png" />
                  </div>
                  <div id="wasHelp">
                    <img src="https://i.ibb.co/kmLrZvf/div.png" />
                  </div>
                  <div id="cyr">
                    <br />A
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Test;
///////////////////////
