import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
class Test extends React.Component {
    render() {
        return (
          <div>
            <h1>this is a test example</h1>    
          </div>
        
        );
      }
    }
ReactDOM.render(<Test />, document.getElementById("review"));
export default Test;