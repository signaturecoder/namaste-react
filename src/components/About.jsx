import { Component } from 'react'
import UserClass from './UserClass';

class About extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
  }

  render() {
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
 */