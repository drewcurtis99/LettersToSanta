import React from 'react';
import Letter from './Letter';

const Inbox = ({ messages, onLetterSubmit }) => (

  <div>
    {messages.map(item => ( <Letter key={item.id} item={item} onLetterSubmit={onLetterSubmit} /> ))}
  </div>
);

export default Inbox;