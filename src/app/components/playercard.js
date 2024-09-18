
export default function PlayerCard({ playerName, role, teamName, isCaptain, isViceCaptain }) {
    return (
      <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{playerName}</h3>
        <p className="text-sm text-gray-600">Role: <span className="font-medium">{role}</span></p>
        <p className="text-sm text-gray-600">Team: <span className="font-medium">{teamName}</span></p>
        
        {isCaptain && (
          <p className="text-sm text-blue-600 font-semibold">Captain</p>
        )}
        
        {isViceCaptain && (
          <p className="text-sm text-blue-400 font-semibold">Vice Captain</p>
        )}
      </div>
    );
  }
  