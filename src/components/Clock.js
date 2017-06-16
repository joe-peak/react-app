import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = { date: new Date() };
  }

  render()
  {
    return (
      <div>
        <h1>Clock Component</h1>
        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }

  componentDidMount()
  {
    this.TimerId=setInterval(() => {
      this.setState({date: new Date() });
    },1000);
  }

  componentWillUnmount()
  {
    clearInterval(this.TimerId);
  }
}

export default Clock;