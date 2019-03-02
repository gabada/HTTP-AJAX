import React from 'react';

const FriendForm = props => {
    return (
        <div>
            <form>
                <input type="text" placeholder="friend name" onChange={props.handleFriendChange} name="name" value={props.name} />
                <input type="text" placeholder="friend age" onChange={props.handleFriendChange} name="age" value={props.age} />
                <input type="text" placeholder="friend email" onChange={props.handleFriendChange} name="email" value={props.email} />
                <input type="text" placeholder="friend gender" onChange={props.handleFriendChange} name="gender" value={props.gender} />
            </form>
            <button onClick={props.handleSubmitFriend}>Add New Friend</button>
        </div>
    )
    
};

export default FriendForm;