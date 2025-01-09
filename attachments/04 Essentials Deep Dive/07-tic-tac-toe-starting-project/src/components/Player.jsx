import React, { useState } from "react";

const Player = ({ name, symbol, activePlayer,onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setIsEditing((state) => !state);
    if(isEditing){
        onChangeName(symbol,playerName)
    }
  };

  const handleChangeName = (e) => {
    setPlayerName(e.target.value);
  };

  return (
    <li className={activePlayer ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChangeName}
          />
        ) : (
          <span className=".player-name">{playerName}</span>
        )}
        <span className=".player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
