import React from 'react';

const Letter = ({ handleChange, onLetterSubmit }) => (

  <div className="letter">
    <h2>Author</h2>
    <form onChange={handleChange} onSubmit={onLetterSubmit} >
      <input className="letter-input" type="text"  name={'subject'} placeholder="Subject"></input>
      <input className="letter-input" type="text"  name={'firstName'} placeholder="First Name"></input>
      <input className="letter-input" type="text"  name={'lastName'} placeholder="Last Name"></input>
      <input className="letter-input" type="text"  name={'country'} placeholder="Country"></input>
      <input className="letter-input" type="text"  name={'city'} placeholder="City"></input>
      <textarea className="letter-body-textarea"  name={'message'} placeholder="Write your letter here"></textarea>
      <button className="letter-submit-button" type="submit">Send Letter</button>
    </form>
  </div>
);

export default Letter;