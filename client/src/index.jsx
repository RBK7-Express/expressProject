import React from "react";
import ReactDOM from "react-dom";
import Test from "./components/rev.jsx";
import App from "./components/photo.jsx";
import Side from "./components/sideBar.jsx";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <App />
        <Side />
        <Test />
      </div>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("app"));
