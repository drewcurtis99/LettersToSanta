import React from 'react';
import Person from './Person';

const List = ({ list, onListSubmit }) => (

  <div>
    <p><b>THE LIST</b></p>
    {list.map(item => ( <Person key={item.id} item={item} onListSubmit={onListSubmit} /> ))}
  </div>
);

export default List;