import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Home = () => {
  const navigetor = useNavigate();
  const [rom, setRom] = useState('');
  const handleRoom = () => {
    navigetor(`/coll-rom/${rom}`);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Join a Meeting</h1>

        <input
          type="text"
          value={rom}
          onChange={e => setRom(e.target.value)}
          placeholder="Enter Meeting Code"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handleRoom}
          className="w-full bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-purple-700 transition duration-300"
        >
          Join
        </button>

        <p className="text-sm text-gray-500">
          Enter a valid room code to join a meeting
        </p>
      </div>
    </div>
  );
};

export default Home;
