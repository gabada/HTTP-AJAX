import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import './index.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            friendsData: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/friends')
            .then(response => {
                console.log(response);
                this.setState({friendsData: response.data})
            });
    }

    render() {
        return (
            <div className="App">
                <FriendsList friends={this.state.friendsData} />
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));