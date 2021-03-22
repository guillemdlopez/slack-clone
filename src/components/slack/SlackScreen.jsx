import React from 'react';
import ChatScreen from './ChatScreen';
import Header from './Header';
import Sidebar from './Sidebar';

const SlackScreen = () => {
  return (
    <div>
      <Header />
      <div className="slack__sidebar-chat-div">
        <Sidebar />
        <ChatScreen />
      </div>
    </div>
  );
};

export default SlackScreen;
