import React from 'react';
import Card from './components/Card';
import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
    followers: [],
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/lydiecherilus/followers`)
      .then(response => {
        this.setState({
          followers: response.data
        });
        console.log(response)
      })
      .catch(err => console.log(err));
  }
  render() {
    const { followers } = this.state;
    console.log(followers);

    return (
      <div className="App" >

        <h2> My followers and I </h2>
        <Card />
        {/* <FollowersCard /> */}
        {
          followers.map(follower => < Card login={follower.login} key={follower.id} />)
        }
      </div>
    )
  }
}
export default App;