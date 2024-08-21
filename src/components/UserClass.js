import React from "react";

// Loading a class based component means creating an instance of class and thus constructor is called
// Constructor is the best place to receive props and state
// this.state is big Object ( You can update some partial key in this object. )
// why do we need to write super(props)?
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy_name",
        location: "blr",
      },
    };
    console.log(`${this.props.name} Child Constructor`);
  }

  async componentDidMount() {
    const userRes = await fetch("https://api.github.com/users/signaturecoder");
    const userData = await userRes.json();
    console.log("USER ", userData);
    this.setState({ userInfo: userData });
    // const newUserInfo = {
    //   name: "Sunny Kumar",
    //   location: "UK"
    // }
    // this.setState({userInfo: newUserInfo})
    console.log(`${this.props.name} Component Did Mount`);

    // learning why do we need to clear interval - this keyword is shared will all the methods or within class
    this.timer = setInterval(
      () => console.log("Component update called"),
      1000
    );
    console.log("Timer ", this.timer);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userInfo !== prevState.userInfo) {
      console.log("Child Component Did Update", prevState.userInfo.name);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component is unmounted ");
  }

  render() {
    console.log(`${this.props.name} Child Render`);
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @singaturecoder</h5>
      </div>
    );
  }
}

export default UserClass;
