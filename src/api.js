import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import './App.css';

class api extends Component{
  constructor(props) {
    super()
    this.state={
      data: []
    } 
  }

  componentWillMount() {
    console.log('ComponentWillMount called');
    let url = 'https://www.dominos.co.id/infdominos/api/getlistPromotions';
    const token = 'lER2MLyGC6Go3rNdE7diPVf0umanUuTf8KhVwPB9ViyZJldnsqFhmViQisdcW6s4';
    axios.get(url, {
      method: 'get',
      headers: {
        'token': token,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    })
    .then( response => {
        console.log(response);      
        let data = response.data.data;
        this.setState({data:data});
      });
  }

  render() {
    return (
      <div>
        { (!_.isEmpty(this.state.data))  && this.state.data.map((item, index)=>{
          return(
            <img src={item.thumbnail}  key={index} />
          );
        })
      }
      </div>
    );
  }
}

export default api;
