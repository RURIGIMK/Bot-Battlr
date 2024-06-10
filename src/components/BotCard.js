// src/components/BotCard.js
import React from 'react';
import './BotCard.css';

const BotCard = ({ bot, handleClick, handleDischarge }) => {
  return (
    <div className="BotCard" onClick={() => handleClick(bot)}>
      <h2>{bot.name}</h2>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Bot Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      <img src={bot.avatar_url} alt={bot.name} />
      {handleDischarge && (
        <button className="discharge-btn" onClick={(e) => { e.stopPropagation(); handleDischarge(bot); }}>
          <i className="fas fa-trash-alt"></i> Discharge
        </button>
      )}
    </div>
  );
};

export default BotCard;
