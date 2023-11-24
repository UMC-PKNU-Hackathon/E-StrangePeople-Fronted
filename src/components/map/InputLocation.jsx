import React, { useEffect, useState } from 'react';
import Map from './Map';

function InputLocation() {
  const [inputText, setInputText] = useState('');
  const [place, setPlace] = useState('');

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      setPlace(inputText);
    }
  };

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          placeholder="Search Place..."
          onChange={onChange}
          value={inputText}
          onKeyDown={pressEnter}
        />
        <button type="submit">검색</button>
      </form>
      <Map place={place}></Map>
    </>
  );
}

export default InputLocation;
