import React, { Component } from 'react';
import { render } from 'react-dom';
import Letter from './Letter';
import axios from 'axios';

export default class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      subject: '',
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onLetterSubmit = this.onLetterSubmit.bind(this);
  }

onLetterSubmit(e) {
  e.preventDefault();
  axios.post('/api/letters', {
  "subject": this.state.subject,
  "firstName": this.state.firstName,
  "lastName": this.state.lastName,
  "country": this.state.country,
  "city": this.state.city,
  "message": this.state.body
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

handleChange(e) {
  this.setState({[e.target.name] : e.target.value})
}

render() {
    return (
      <div>
        <p>Rise & Grind</p>
        <Letter handleChange={this.handleChange} onLetterSubmit={this.onLetterSubmit} />
      </div>
    );
  }
}