// src/components/BotCollection.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BotCard from './BotCard';
import './BotCollection.css';

const BotCollection = ({ addToArmy }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/bots')
      .then(response => {
        setBots(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="BotCollection">
      <h2>Bot Collection</h2>
      <div className="bots">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={addToArmy} />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
