import React, { Component } from 'react';
import './App.css';


class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	email:"",
    	password:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if((event.target.email.value === localStorage.getItem('email')) &&
      (event.target.password.value === localStorage.getItem('password'))) {
        alert('Now You have logged in Successfully!');
        this.props.history.push("/api");
      }
    else {
      alert('Email id or password did not match!');
    }
  }

  render() {
    return (
      <div className="container">
        <br/>
          <form onSubmit={this.handleSubmit}>
            <h1>Login Form</h1>
              <label>
                Name:
                <br/>
                <input type="text" name="email" placeholder="Enter Your Email"/><br/>
                Password:
                <br/>
                <input type="password"  name="password" placeholder="Enter Your Password" /><br/><br/>
              </label><br/>
            <input className="btn" type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}
export default login;


