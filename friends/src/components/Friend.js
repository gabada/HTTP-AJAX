import React from 'react';

const Friend = props => {
    return (
        <ul>
            <li>Name: {props.friend.name} <button onClick={() => props.handleDeleteFriend(props.friend)}>X</button> <button onClick={() => props.handleUpdateFriend(props.friend)}>Edit</button></li>
            <li>Age: {props.friend.age}</li>
            <li>E-mail: {props.friend.email}</li>
            <li>Gender: {props.friend.gender}</li>
        </ul>
    )
    
};

// const EditFriendForm = props => {
//     return <input placeholder={props.friend.name} type="text" onChange={props.editFriendHandler}/>
// }

export default Friend;