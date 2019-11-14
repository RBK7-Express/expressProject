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
        console.log("DONE!");
      },
      error: function(err) {
        console.log(err, "kjhsdkajs");
      }
    });
  }
  render() {
    return (
      <div className="wholeProject">
        <div>
          <p>{this.state.name}</p>
        </div>
        <div className="price">
          <p>{this.state.price} </p>
        </div>
        <p>Buy 1, Get 1 50% Off</p>
        <hr className="_3zd16" aria-hidden="true"></hr>
        <div className="selectSize">
          <p>Select Size:</p> <button>regular</button> <button>tall</button>
        </div>
        <p>{this.state.sizes} </p>
        <p>Recommend My Size</p>

        <button>Add to Bag</button>

        <div className="AverDiv">
          Average Fit based on
          <span></span>
        </div>

        <hr className="_3zd16" aria-hidden="true"></hr>

        <div className="accordion__item _8Oqf_ _3aW4w">
          <button className="proB">Product Details</button>
          <div
            id="accordion-panel-5ed3"
            className="tryP"
            aria-labelledby="accordion-tab-5ed3"
            role="tabpanel"
            aria-hidden="false"
          >
            {/* <div id="innerText">
              <p className="bodySecondary">
                Your favorite casual tee now amped up with an unbelievably soft
                fit and feel. The classic crew neck and hue make it extremely
                versatile, so get ready to enjoy this one's all-day comfort all
                year long.
              </p>
            </div> */}
            {/* <section id="test">
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
            </section> */}
            <div className="Ywr0X">
              <span>
                <button
                  type="button"
                  className="linkDark"
                  tabIndex="0"
                  title="men's Size Chart Button"
                >
                  Size Chart
                </button>
              </span>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* <div className="accordion__item _8Oqf_ _3aW4w">
          <button
            className="shBut"
            type="button"
            aria-controls="accordion-panel-ff0d"
            aria-expanded="true"
            role="tab"
            id="accordion-tab-ff0d"
            aria-selected="false"
            aria-label="Shipping and Returns"
          >
            Shipping and Returns
          </button>
          <div
            id="accordion-panel-ff0d"
            className="try"
            aria-labelledby="accordion-tab-ff0d"
            role="tabpanel"
            aria-hidden="false"
          >
            <p className="shipP">
              We ship anywhere in the U.S. and to over 55 international
              destinations.
            </p>
            <p className="bob bodyPrimary">
              Everyday free standard shipping on orders $50+ placed online at
              Express.com for U.S. or Canada.
            </p>
            <p className="bob bodyPrimary">
              Simple Returns. Up to 60 days. Get the full details on{" "}
              <a
                className="linkDark"
                title="Returns &amp; Exchanges"
                href="/service/custserv.jsp?name=ReturnsMain"
              >
                Returns &amp; Exchanges
              </a>
              . Excludes Final Sale items ending in .97 cents.
            </p>
            <span></span>
          </div>
        </div> */}

        <hr></hr>

        {/* avilability Section  */}
        <section className="Avilability">
          <div className="avil">
            <span className="avilabile">
              <div className="avilDiv">
                <span className="innerAvil">
                  <span className="aviInnSp">
                    <span className="check">
                      Check Availability at Stores Near You
                    </span>
                    <button
                      className="avilBut"
                      type="button"
                      aria-label="View product availability at other Express Stores"
                      value="View product availability at other Express Stores"
                    >
                      Change Store
                    </button>
                  </span>
                </span>
              </div>
            </span>
          </div>
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
        </div>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default Side;
