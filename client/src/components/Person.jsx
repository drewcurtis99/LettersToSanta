import React from 'react';

const Person = ({ item, onListSubmit }) => (

  <div className="lts__item">
    <p>Name: {item.firstname} {item.lastname}</p>
    <p>Location: {item.city}, {item.country}</p>
    <p>{item.isnice ? "Nice" : "Naughty"}</p>
    <p>Have you checked twice?</p>
    {item.ischecked ? (<p>Yes you have</p>) : (<div className="lts__item__buttons"><button onClick={(e) => onListSubmit(e, item)} name="Naughty" type="submit">Naughty</button>
      <span>or</span>
      <button onClick={(e) => onListSubmit(e, item)} name="Nice" type="submit">Nice</button></div>)}
  </div>
);

export default Person;