import React from 'react';
import axios from "axios";
import { Route, Link } from 'react-router-dom';

import './index.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

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
            .then(response => {
            console.log(response)
            this.setState({ friendsData: response.data, name: '', age: '', email: ''})
            })
            .catch(err => console.log(err));
    }

    handleDeleteFriend = friend => {
        axios.delete(`http://localhost:5000/friends/${friend.id}`)
            .then(response => {
                this.setState({ friendsData: response.data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="App">
                <FriendsList friends={this.state.friendsData} handleDeleteFriend={this.handleDeleteFriend} />
                <Route exact path="/newfriend/" render={props => <FriendForm {...props} handleFriendChange={this.handleFriendChange} handleSubmitFriend={this.handleSubmitFriend} /> } />
                <Link to="/newfriend/">Add Friend</Link>
            </div>
        )
    }
}

export default App;