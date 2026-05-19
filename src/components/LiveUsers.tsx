import React, { useState, useEffect } from 'react';

export default function LiveUsers() {
  const [users, setUsers] = useState(173); // Initial value in range

  useEffect(() => {
    const updateUsers = () => {
      // Random value between 150 and 195
      const newUsers = Math.floor(Math.random() * (195 - 150 + 1)) + 150;
      setUsers(newUsers);
    };

    // Update every 3 to 8 seconds
    const interval = setInterval(updateUsers, Math.random() * 5000 + 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flex items-center gap-1.5 ml-2 text-[#1D3557] font-bold bg-[#FFB400]/20 px-2 py-0.5 rounded-full border border-[#FFB400]/40">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse block"></span>
      {users} Active Now
    </span>
  );
}
