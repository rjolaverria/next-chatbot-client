import React from 'react';
import { Error, Success } from '@/icons';

type MessageStatusProps = {
  status?: 'delivered' | 'error';
};

const MessageStatus: React.FC<MessageStatusProps> = ({ status }) => {
  if (!status) return null;
  const color = status === 'delivered' ? 'text-stone-500' : 'text-red-500';
  return (
    <span className={`mt-1.5 flex items-center gap-x-1 text-xs ${color}`}>
      {status === 'delivered' ? <Success /> : <Error />}
      {status === 'delivered' ? 'Delivered' : 'Error'}
    </span>
  );
};

export default MessageStatus;
