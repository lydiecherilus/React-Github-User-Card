import React from 'react'
import axios from 'axios';

class Card extends React.Component {
  state = {
    user_card: [],
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/lydiecherilus`)
      // .get(`https://api.github.com/users/${this.props.login}`)
      .then(response => {
        this.setState({
          user_card: response.data
        });
        console.log(response)
      })
      .catch(err => console.log(err));
  }
  render() {
    const { avatar_url, login, name, location, html_url, followers, following, bio } =
      this.state.user_card;
    return (
      <div className='card' data-id={login}>
        <img src={avatar_url} alt={name} />
        <div className='cardinfo'>
          <h3 className='name'>{name}</h3>
          <p className='username'>{login}</p>
          <p> Location: {location}</p>
          <p> Profile:
            <a href={html_url}>{html_url}</a>
          </p>
          <p> Followers: {followers}</p>
          <p> Following: {following}</p>
          <p> Bio: {bio}</p>
        </div>
      </div>
    );
  }
}
export default Card;