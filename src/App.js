import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

const App = () => {
  const [army, setArmy] = useState([]);

  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <div className="container">
        <BotCollection addToArmy={addToArmy} />
        <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      </div>
    </div>
  );
};

export default App;
