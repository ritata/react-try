import React from "react";
import "./styles.css";

function formatName(user) {
  return user.lastName + "" + user.firstName;
}

function getGreeting(user) {
  if (user) {
    return <span>Hi, {formatName(user)}</span>;
  } else {
    return <span>Hi, Guest!</span>;
  }
}

function Avatar() {
  return (
    <img
      className="Avatar"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ukl1zFvIUW0ko7McixEfXD7qG8RjcqPtnQ&usqp=CAU"
      alt="avatar"
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar />
      {getGreeting(props.user)}
      <button className="SignButton">Sign out</button>
    </div>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <div className="Clock">{this.state.date.toLocaleTimeString()}</div>;
  }
}

function NavigationBar(props) {
  return (
    <div className="NavigationBar">
      <UserInfo user={props.userInfo} />
      <Clock />
    </div>
  );
}

export default function Comment(props) {
  return (
    <div>
      <NavigationBar userInfo={props.userInfo} date={props.date} />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
