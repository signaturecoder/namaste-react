import React from 'react';

// Loading a class based component means creating an instance of class and thus constructor is called 
// Constructor is the best place to receive props and state
// this.state is big Object ( You can update some partial key in this object. )
// why do we need to write super(props)?
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
        console.log(`${this.props.name} Child Constructor`);
    }

    componentDidMount(){
      console.log(`${this.props.name} Component Did Mount`);
    }

  render() {
    console.log(`${this.props.name} Child Render`);
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button className="px-4 py-2 m-2 bg-green-300 rounded-lg" onClick={() => {
            this.setState({count: count + 1, count2: count2 + 1});
       
        }}>Increase Count</button>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h5>Contact: @singaturecoder</h5>
      </div>
    );
  }
}

export default UserClass;
