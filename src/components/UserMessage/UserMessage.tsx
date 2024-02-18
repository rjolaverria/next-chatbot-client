import React from 'react';
import MessageStatus from '../MessageStatus/MessageStatus';
import Avatar from '../Avatar/Avatar';

type UserMessageProps = {
  text: string;
  status?: 'delivered' | 'error';
};

const UserMessage: React.FC<UserMessageProps> = ({ text, status }) => {
  return (
    <li className='flex ms-auto gap-x-2 sm:gap-x-4'>
      <div className='grow text-end space-y-3'>
        <div className='inline-flex flex-col justify-end'>
          <div className='inline-block bg-stone-100 border-stone-200 rounded-2xl p-4'>
            <p className='text-sm text-start text-neutral-700'>{text}</p>
          </div>

          <MessageStatus status={status} />
        </div>
      </div>
      <Avatar name='You' />
    </li>
  );
};

export default UserMessage;
