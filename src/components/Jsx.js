import React from 'react';
import ReactDOM from 'react-dom';

class DatePicker extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div>
        Imagine a {props.color} datepicker here
      </div>
    ); 
 } 
}


let MyComponent = {
  DatePicker
};

class BlueDatePicker extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    /**
     * Using Dot Notation for JSX Type
     * Props Default to "True" this.props.autoComplete==true
     */
    return (
      <MyComponent.DatePicker className="DatePicker" autoComplete color='blue'/>
    )
  }
}

class App extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    /*return (
      <div firstName="Ben" lastName="Hector"> Greeting....</div>
    );*/

    /**
     * Spread Attributes 等价于
     */
    let ops = { firstName: "Ben", lastName: "Hector" };
    return (
      <div {...ops}> Greeting....</div>
    );
  }
}