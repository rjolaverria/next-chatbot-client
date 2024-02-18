'use client';

import React from 'react';

const ChatContainer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ul className='flex-1 overflow-scroll p-4 flex-col justify-center space-y-10 h-full'>
      {children}
    </ul>
  );
};

export default ChatContainer;
