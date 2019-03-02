import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
    if (props.friends.length === 0) {
        return <h1>Loading friends...</h1>
    }
    return (
        <div>
            {props.friends.map(friend => {
                return <Friend key={friend.id} friend={friend} handleDeleteFriend={props.handleDeleteFriend} handleUpdateFriend={props.handleUpdateFriend} />
            })}
        </div>
    );
}

export default FriendsList;