import React from 'react';

const Person = ({ item, onListSubmit }) => (

  <div>
    <ul>
      <li>
        <div>Name: {item.firstname} {item.lastname}</div>
        <div>Location: {item.city}, {item.country}</div>
        <div>{item.isnice ? "Nice" : "Naughty"}</div>
        <div>Have you checked twice?</div>
        {item.ischecked ? (<div>Yes you have</div>) : (<div><button onClick={(e) => onListSubmit(e, item)} name="Naughty" type="submit">Naughty</button>
          or
          <button onClick={(e) => onListSubmit(e, item)} name="Nice" type="submit">Nice</button></div>)}
      </li>
    </ul>
  </div>
);

export default Person;