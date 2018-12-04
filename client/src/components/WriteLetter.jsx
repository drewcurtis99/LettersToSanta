import React from 'react';

const WriteLetter = ({ handleChange, onWriteLetterSubmit }) => (

  <div className="letter lts__write-letter">
    <form className="lts__write-letter__form" onChange={handleChange} onSubmit={onWriteLetterSubmit} >
      <h2>LETTER TO SANTA</h2>
      <div className="lts__write-letter__form__top">
        <input className="letter-input" type="text"  name={'firstName'} placeholder="First Name"></input>
        <input className="letter-input" type="text"  name={'lastName'} placeholder="Last Name"></input>
        <input className="letter-input" type="text"  name={'country'} placeholder="Country"></input>
        <input className="letter-input" type="text"  name={'city'} placeholder="City"></input>
      </div>
      <textarea className="letter-body-textarea"  name={'message'} placeholder="Write your letter here"></textarea>
      <button className="letter-submit-button" type="submit">Send Letter</button>
    </form>
  </div>
);

export default WriteLetter;