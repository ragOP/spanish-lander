import React, { useEffect } from 'react';

const Chat = () => {
  useEffect(() => {
    // Redirect to second.html
    window.location.href = '/second.html';
  }, []);

  return null; // This component won't render anything
};

export default Chat;
