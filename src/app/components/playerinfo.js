'use client'
import { useState } from 'react';
import PlayerForm from './playerForm';
import PlayerCard from './playercard';

export default function Playerinfo() {
  const [players, setPlayers] = useState([]);

  const handlePlayerSubmit = (playerData) => {
    setPlayers((prevPlayers) => [...prevPlayers, playerData]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-10">
        <PlayerForm onPlayerSubmit={handlePlayerSubmit} />

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-center text-blue-600 mb-6">Player List</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {players.map((player, index) => (
              <PlayerCard
                key={index}
                playerName={player.playerName}
                role={player.role}
                teamName={player.teamName}
                isCaptain={player.isCaptain}
                isViceCaptain={player.isViceCaptain}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
