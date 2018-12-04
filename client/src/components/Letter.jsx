import React from 'react';

const Letter = ({ item, onLetterSubmit }) => (

  <div className="lts__item">
    <p>Name: {item.firstname} {item.lastname}</p>
    <p>Location: {item.city}, {item.country}</p>
    <p>Subject: {item.subject}</p>
    <p>Message: {item.message}</p>
    <div className="lts__item__buttons">
      <button onClick={(e) => onLetterSubmit(e, item)} name="Naughty" type="submit">Naughty</button>
      <span>or</span>
      <button onClick={(e) => onLetterSubmit(e, item)} name="Nice" type="submit">Nice</button>
    </div>
  </div>
);

export default Letter;