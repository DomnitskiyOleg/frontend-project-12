import React from 'react';

const MessageBox = ({ messages, currentChannelId }) => {
  const channelMessages = messages
    .filter(({ channelId }) => channelId === currentChannelId)
    .map(({ id, message, username }) => (
      <div key={id} className="text-truncate mb-2">
        <b>{`${username}: `}</b>
        {message}
      </div>
    ));
  return (
    <div
      id="messages-box"
      className="h-100 chat-messages px-5 mywrapper overflow-auto"
    >
      {channelMessages}
    </div>
  );
};

export default MessageBox;
