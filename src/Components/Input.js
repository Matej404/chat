import {Component} from "react";
import React from "react";

class Input extends Component {
  
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const inputTrim = this.state.text.trim();
    if (inputTrim.length < 1) {
      return;
    }
    
    this.props.onSendMessage(inputTrim);
    this.setState({text: ""});
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Type message"
            autoFocus={true}
          />
          <button>SEND</button>
        </form>
        </div>  
    );
  }
}

export default Input;