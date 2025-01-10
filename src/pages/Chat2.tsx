import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    // Redirect to second.html
    window.location.href = '/third.html';
  }, []);

  return null; // This component won't render anything
};

export default Chat;
