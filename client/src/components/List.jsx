import React from 'react';
import Person from './Person';

const List = ({ list, onListSubmit }) => (

  <div className="lts__list">
    <h2>THE LIST</h2>
    {list.map(item => ( <Person key={item.id} item={item} onListSubmit={onListSubmit} /> ))}
  </div>
);

export default List;