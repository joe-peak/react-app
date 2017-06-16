import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component{
  constructor(props)
  {
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={value:''};
  }

  handleChange(event)
  {
    this.setState({value:event.target.value});
  }

  handleSubmit(event)
  {
    event.preventDefault();
    //alert(this.state.value);
    alert(this.input.value);
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange} ref={input=>this.input=input}/>
        </label>
        <p>{this.state.value}</p>
         <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;