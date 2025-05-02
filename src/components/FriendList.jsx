import React from 'react';
import FriendListItem from './FriendListItem';
import './FriendList.css';

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends && friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

export default FriendList;