import React, { Component } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      // ES6 computed property name syntax
      [name]: value
    });
  };

  callLoginAPI = async () => {
    const credentials = this.state;
    this.setState({
      username: "",
      password: ""
    });

    // Calling login API
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    });
    const body = await response.json();
    return body;
  };

  submitCredentials = () => {
    // Receiving promise from node
    this.callLoginAPI().then(data => console.log(data));
  };

  render() {
    return (
      <div>
        <InputGroup className="mb-3">
          <FormControl
            name="username"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="Username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <FormControl
            name="password"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={this.submitCredentials}
            >
              Login
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
  }
}

export default Login;
