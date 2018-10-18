import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Application extends Component {

  /* Init */
  constructor(props) {
    super(props);

    /* Set state */
    this.state = {
      h1: props.h1
    };

    /* Set function */
    this.onClick = this.onClick.bind(this);
  }

  /* Declare function */
  onClick() {
    /* Update state */
    this.setState({
      h1: "Modified"
    });
  }

  /* render */
  render() {
    let h1 = this.state.h1;

    return (
      <h1 onClick={this.onClick}>{ h1 }</h1>
    )
  }
}

ReactDOM.render(<Application h1="Hello world" />, document.getElementById('app'));
