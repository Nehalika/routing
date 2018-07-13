import React, { Component } from 'react';
import './App.css';


class signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:"",
                password:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('email', event.target.email.value);
    localStorage.setItem('password', event.target.password.value);
    let data={};
    data.email=localStorage.getItem('email');
    data.password=localStorage.getItem('password');
    alert('A name was submitted: ' + data.email);
  }

  render() {
    return (
      <div className="container">
        <br/>
          <form onSubmit={this.handleSubmit}>
          <h1>Signin Form</h1>
            <label>
              Name:<br/>
              <input type="text" name="email" placeholder="Enter Name" /><br/><br/>
              Password:<br/>
              <input type="password" name="password" placeholder="Enter password"/><br/><br/>
            </label><br/>
            <input className="btn" type="submit" value="Submit"  />
          </form>
      </div>
    );
  }
}
export default signin;


