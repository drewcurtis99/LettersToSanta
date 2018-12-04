import React from 'react';

const Letter = ({ item, onLetterSubmit }) => (

  <div>
    <ul>
      <li>
          <div>Name: {item.firstname} {item.lastname}</div>
          <div>Location: {item.city}, {item.country}</div>
          <div>Subject: {item.subject}</div>
          <div>Message: {item.message}</div>
          <div>
            <button onClick={(e) => onLetterSubmit(e, item)} name="Naughty" type="submit">Naughty</button>
            <span>or</span>
            <button onClick={(e) => onLetterSubmit(e, item)} name="Nice" type="submit">Nice</button>
          </div>
      </li>
    </ul>
  </div>
);

export default Letter;