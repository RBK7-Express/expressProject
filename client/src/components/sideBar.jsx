import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: "",
      sizes: "",
      colors: []
    };
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
      success: function(data) {
        that.setState({
          id: data.id,
          name: data.name,
          price: data.price,
          sizes: data.sizes,
          colors: data.colors
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <div className="wholeProject">
        {/* /////////Name section ///////// */}
        <div>
          {" "}
          <p>{this.state.name}</p>{" "}
        </div>
        {/* /////////Price section ///////// */}
        <div className="price">
          <p>{this.state.price} </p>
        </div>
        <p>Buy 1, Get 1 50% Off</p>
        <hr></hr>
        {/* /////////Size Fix section ///////// */}
        <div className="selectSize">
          <p>Select Size:</p> <button>regular</button> <button>tall</button>
        </div>
        {/* /////////Size section ///////// */}
        <div>
          <p>{this.state.sizes} </p>
          <p>Recommend My Size</p>
        </div>

        {/* add bag section  */}
        <button className="bag">Add to Bag</button>
        {/* Average Section  */}

        <div className="AverDiv"> Average Fit based on </div>
        <hr></hr>
        {/* Product Section */}
        <div className="pro">
          <button className="proB">Product Details</button>
          <div className="tryP">
            <div id="innerText">
              <p className="bodySecondary">
                Your favorite casual tee now amped up with an unbelievably soft
                fit and feel. The classic crew neck and hue make it extremely
                versatile, so get ready to enjoy this one's all-day comfort all
                year long.
              </p>
            </div>
            <section id="test">
              <div className="bob bodyPrimary">
                <ul>
                  <li>Moisture-wicking</li>
                  <li>Supersoft, stretch fabric</li>
                  <li>Short sleeves; Straight hem</li>
                  <li>Imported</li>
                  <li>Crew neck, tagless</li>
                  <li>Cotton/Modal/Spandex</li>
                  <li>Machine wash</li>
                </ul>
              </div>
            </section>
            <div className="Ywr0X">
              <span>
                <button type="button" className="linkDark">
                  Size Chart
                </button>
              </span>
            </div>
          </div>
        </div>
        <hr></hr>
        {/* shipping section */}

        <div>
          <button className="shBut">Shipping and Returns</button>
          <div className="try">
            <p className="shipP">
              We ship anywhere in the U.S. and to over 55 international
              destinations.
            </p>
            <p className="shipP">
              Everyday free standard shipping on orders $50+ placed online at
              Express.com for U.S. or Canada.
            </p>
            <p className="shipP">
              Simple Returns. Up to 60 days. Get the full details on
              <a href="/service/custserv.jsp?name=ReturnsMain">
                Returns &amp; Exchanges
              </a>
              . Excludes Final Sale items ending in .97 cents.
            </p>
          </div>
        </div>
        <hr></hr>

        {/* avilability Section  */}
        <section className="Avilability">
          <span className="check">Check Availability at Stores Near You</span>
          <button className="avilBut">Change Store</button>
        </section>
        <hr></hr>
        {/* gift section */}
        <div className="giftPartOut">
          <span className="giftPartTitle">
            <a
              className="giftLink"
              href="https://express.smartgiftit.com/sender/get-gifting/11512738"
              title="Send this product as a gift"
            >
              Send As Gift{" "}
            </a>
            <div className="giftPartText">
              Recipient can customize or exchange online
            </div>
          </span>
          {/* <span className= "giftIcon">
                 <a href="https://cdn4.iconfinder.com/data/icons/gift-5/200/577_gift-512.png" ></a> 
                </span>                */}
        </div>
      </div>
    );
  }
}
// ReactDOM.render(<Side />, document.getElementById("sideBar"));
export default Side;
