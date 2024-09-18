'use client'
import { useState } from 'react';

export default function PlayerForm({ onPlayerSubmit }) {
  const [playerName, setPlayerName] = useState('');
  const [role, setRole] = useState('batsman');
  const [teamName, setTeamName] = useState('');
  const [isCaptain, setIsCaptain] = useState(false);
  const [isViceCaptain, setIsViceCaptain] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const playerData = {
      playerName,
      role,
      teamName,
      isCaptain,
      isViceCaptain,
    };
    onPlayerSubmit(playerData);
    setPlayerName('');
    setRole('batsman');
    setTeamName('');
    setIsCaptain(false);
    setIsViceCaptain(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-12  rounded-lg shadow-lg font-poppins">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Player Info</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="playerName" className="block text-lg font-semibold text-gray-700">Player Name</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            placeholder="Enter player's name"
            required
          />
        </div>

        <div>
          <label htmlFor="role" className="block text-lg font-semibold text-gray-700">Role</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
          >
            <option value="batsman">Batsman</option>
            <option value="bowler">Bowler</option>
            <option value="allrounder">All-Rounder</option>
          </select>
        </div>

        <div>
          <label htmlFor="teamName" className="block text-lg font-semibold text-gray-700">Team Name</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            placeholder="Enter team name"
            required
          />
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isCaptain"
              checked={isCaptain}
              onChange={() => setIsCaptain(!isCaptain)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="isCaptain" className="ml-3 block text-lg text-gray-900">Captain</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isViceCaptain"
              checked={isViceCaptain}
              onChange={() => setIsViceCaptain(!isViceCaptain)}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="isViceCaptain" className="ml-3 block text-lg text-gray-900">Vice Captain</label>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
