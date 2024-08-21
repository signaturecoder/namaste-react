import { Component } from 'react'
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
    console.log(`${this.props.name} Parent Constructor`);
  }

  componentDidMount() {
    console.log(`${this.props.name} Component Did Mount`);
  }

  render() {
    console.log(`${this.props.name} Parent Render`);
    return (
      <div>
        <h2>About US Page</h2>
        <UserClass name={" Sanu Kumar ( Classes )"} location="kanpur"/>
        <UserClass name={" Sunny Kumar ( Classes )"} location="Bengaluru"/>
      </div>
    )
  }

}

export default About;

// Render Cycle 
/**
 * Parent Constructor
 * Parent Render
 * Akshay Child Constructor
 * Akshay Child Render
 * Akshay Component Did Mount 
 * 
 * Elon Musk Child Constructor
 * Elon Musk Child Render
 * Elon Musk Component Did mount
 * 
 * Parent Component Did mount
 * 
 * There was mistake in above rendering cycle because react mounting happens in two phase - render and commit phase 
 * And to optimise the performance of react, it will do both of these in batches so first rendering of all components happens 
 * and then commit phase will occur simultaneously 
 * 
 * So The correct order is 
 * Parent Constructor
 * Parent Render
 * 
 * - Akshay Child Constructor
 * - Akshay Child Render
 * 
 * - Elon Musk Child Constructor
 * - Elon Musk Child Render
 * 
 * - Akshay Component Did Mount 
 * - Elon Musk Component Did mount
 * 
 * Parent Component Did mount
 * 
 * 
 * 
About.jsx:7  About( Classes ) Parent Constructor
About.jsx:15  About( Classes ) Parent Render
UserClass.js:15  Sanu Kumar ( Classes ) Child Constructor
UserClass.js:23  Sanu Kumar ( Classes ) Child Render
UserClass.js:15  Sunny Kumar ( Classes ) Child Constructor
UserClass.js:23  Sunny Kumar ( Classes ) Child Render
UserClass.js:19  Sanu Kumar ( Classes ) Component Did Mount
UserClass.js:19  Sunny Kumar ( Classes ) Component Did Mount
About.jsx:11  About( Classes ) Component Did Mount
 */