// src/components/YourBotArmy.js
import React from 'react';
import axios from 'axios';
import BotCard from './BotCard';
import './YourBotArmy.css';

const YourBotArmy = ({ army, removeFromArmy }) => {
  const handleDischarge = (bot) => {
    axios.delete(`http://localhost:3001/bots/${bot.id}`)
      .then(() => {
        removeFromArmy(bot);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="YourBotArmy">
      <h2>Your Bot Army</h2>
      <div className="bots">
        {army.map(bot => (
          <BotCard key={bot.id} bot={bot} handleClick={() => removeFromArmy(bot)} handleDischarge={handleDischarge} />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
