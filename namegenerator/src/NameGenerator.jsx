// src/NameGenerator.js
import React, { useState } from 'react';

const names = ["Anik", "Amaay", "Aryansh", "Anagh", "Aryav", "Atharv"];

const NameGenerator = () => {
  const [randomName, setRandomName] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const generateRandomName = () => {
    if (!buttonClicked) {
      const randomIndex = Math.floor(Math.random() * names.length);
      setRandomName(names[randomIndex]);
      setButtonClicked(true);
    }
  };

  return (
    <div>
      <h1>{randomName}</h1>
      <button onClick={generateRandomName} disabled={buttonClicked}>Generate Name</button>
      <p>Sab Log aur name generate kare</p>
    </div>
  );
};

export default NameGenerator;
