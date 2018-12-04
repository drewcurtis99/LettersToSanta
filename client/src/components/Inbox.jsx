import React from 'react';
import Letter from './Letter';

const Inbox = ({ messages, onLetterSubmit }) => (

  <div className="lts__inbox">
    <h2>INBOX</h2>
    {messages.map(item => ( <Letter key={item.id} item={item} onLetterSubmit={onLetterSubmit} /> ))}
  </div>
);

export default Inbox;