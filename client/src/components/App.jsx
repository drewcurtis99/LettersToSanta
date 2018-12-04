import React, { Component } from 'react';
import { render } from 'react-dom';
import WriteLetter from './WriteLetter';
import Inbox from './Inbox';
import List from './List';
import Snow from './Snow'
import axios from 'axios';

export default class App extends React.Component {
  constructor () {
    super ();
    this.state = {
      inbox: [],
      list: [],
      subject: '',
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      message: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.onWriteLetterSubmit = this.onWriteLetterSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.getCurrentItem = this.getCurrentItem.bind(this);
    this.onLetterSubmit = this.onLetterSubmit.bind(this);
    this.onListSubmit = this.onListSubmit.bind(this);
  }

componentDidMount() {
  axios.get('/letters')
  .then(response => {
    this.setState({
      inbox : response.data
    })
  })
  .catch(function (error) {
    console.log(error);
  });

  axios.get('/list')
  .then(response => {
    this.setState({
      list : response.data
    })
  })
  .catch(function (error) {
    console.log(error);
  });
}

onWriteLetterSubmit(e) {
  e.preventDefault();
  axios.post('/api/letters', {
  "subject": this.state.subject,
  "firstName": this.state.firstName,
  "lastName": this.state.lastName,
  "country": this.state.country,
  "city": this.state.city,
  "message": this.state.message
  })
  .then(response => {
    this.getCurrentItem(this.updateState, "inbox", `/letters`)
  })
  .catch(function (error) {
    console.log(error);
  });
}

onLetterSubmit(e, item) {
  e.preventDefault();
  axios.post('/api/list', {
    "firstName": item.firstname,
    "lastName": item.lastname,
    "country": item.country,
    "city": item.city,
    "isNice": e.target.name === "Nice" ? true : false,
    "isChecked": false
  })
  .then(response => {
    this.getCurrentItem(this.updateState, "list", `/list`)
    axios.delete(`/api/letters/${item.id}`)
    .then(data => this.getCurrentItem(this.updateState, "inbox", `/letters`))
    .catch(error => console.error(error));
  })
  .catch(function (error) {
    console.log(error);
  });
}

onListSubmit(e, item) {
  e.preventDefault();
  axios.put(`/api/list/${item.id}`, {
    "isNice": e.target.name === "Nice" ? true : false,
    "isChecked": true
  })
  .then(response => {
    this.getCurrentItem(this.updateState, "list", `/list`)
  })
  .catch(function (error) {
    console.log(error);
  });
}

getCurrentItem(cb, state, endpoint) {
  axios.get(endpoint)
  .then(data => cb(state, data.data))
  .catch(error => console.error(error));
}

updateState(prop, value) {
    this.setState({
      [prop]: value
    });
  }

handleChange(e) {
  this.setState({[e.target.name] : e.target.value})
}

render() {
  let inbox;
  if (this.state.inbox.length) {
    inbox = ( <Inbox messages={this.state.inbox} onLetterSubmit={this.onLetterSubmit} /> );
  } else {
    inbox = ( <div className="lts__inbox"><h2>INBOX</h2><p>No Letters in Inbox</p></div> );
  }

  let list;
  if (this.state.list.length) {
    list = ( <List list={this.state.list} onListSubmit={this.onListSubmit} /> );
  } else {
    list = ( <div className="lts__list"><h2>THE LIST</h2><p>List is Empty</p></div> );
  }
    return (
      <div className='lts__container'>
        <Snow />
        <WriteLetter handleChange={this.handleChange} onWriteLetterSubmit={this.onWriteLetterSubmit} />
        {inbox}
        {list}
      </div>
    );
  }
}