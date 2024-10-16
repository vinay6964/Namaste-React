import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      count2: 5,
      userInfo : {
        name : "temp",
        login : "temp",
        avatar_url : "temp",
        id: 0
      }
    };
    console.log("constructor is called")
  }
  async componentDidMount () {
    console.log("child componenetDidMount is called")
    const data = await fetch("https://api.github.com/users/vinay6964");
    const jsonData = await data.json();
    this.setState({userInfo:jsonData})
    console.log("Child data",jsonData);
  }

  componentDidUpdate () {
    console.log("componentDidUpdate is called");
  }

  componentWillUnmount () {
    console.log("componentWillUnmount is called");
  }

  render() {
    console.log("render is called");
    const {name,login,avatar_url,id} = this.state.userInfo;

    return (
      <div className="userDetails">
        <h5>Name : {name}</h5>
        <h5>User Id : {login}</h5>
        <div>
        <UserContext.Consumer>
        {(profile) => (
          <h5>Logged In User : {profile.userName}</h5>
          )}
        </UserContext.Consumer>
        </div>
        <img alt="Loading" src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;