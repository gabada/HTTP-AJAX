import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import './index.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsData: [],
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                this.setState({friendsData: response.data});
            }).catch(err => {
                console.log(err)
            })

    }

    handleFriendChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmitFriend = () => {
        const friend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        };
        axios.post('http://localhost:5000/friends', friend)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="App">
                <form>
                <input type="text" placeholder="new friend name" onChange={this.handleFriendChange} name="name" value={this.state.name} />
                <input type="text" placeholder="new friend age" onChange={this.handleFriendChange} name="age" value={this.state.age} />
                <input type="text" placeholder="new friend email" onChange={this.handleFriendChange} name="email" value={this.state.email} />
                </form>
                <button onClick={this.handleSubmitFriend}>Add New Friend</button>
                <FriendsList friends={this.state.friendsData} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));