import React from 'react';

const FriendsList = () => {
    return (
        <div>
            {props.friends.map(friend => {
                return <div key={friend.id}>{friend.name}</div>
            })}
        </div>
    );
}

export default FriendsList;