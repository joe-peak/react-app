import React from 'react';
import ReactDOM from 'react-dom';

class BoilingVerdict extends React.Component{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return this.props.celsius>=100?(
      <div>
        The water would boil.
      </div>
    ):
    (
      <div>
        The water would not boil.
      </div>
    );
  }
}

let toCelsius = (fahrenheit) =>{
  return (fahrenheit - 32) * 5 / 9;
}

let toFahrenheit = (celsius) =>{
  return (celsius * 9 / 5) + 32;
}

let tryConvert=(temperature, convert)=> {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component{
  constructor(props)
  {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.scaleName = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    this.state = {
      value:''
    }
  }

  handleChange(e)
  {
    console.log(e.target.dataset.scale);
    console.log(e.target.value)
    this.props.onTemperatureChange(e.target);
  }

  render()
  {
    return (
      <fieldset>
        <legend>
          Enter temperature in {this.scaleName[this.props.scale]}
        </legend>
        <input type="text" data-scale={this.props.scale} value={this.props.value} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

class Calculator extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      celsius: "",
      fahrenheit:""
    };
    this.handleChange = this.handleChangec.bind(this);
  }

  handleChangec(e)
  {
    if (e.dataset.scale === 'c')
    {
       this.setState({ celsius:e.value});
       this.setState({ fahrenheit:tryConvert(e.value,toFahrenheit)});
    }
    else
    {
      this.setState({fahrenheit:e.value});
      this.setState({celsius:tryConvert(e.value,toCelsius)});
    }  
  }

  render()
  {
    return (
        <fieldset>
          <TemperatureInput scale='c' value={this.state.celsius} onTemperatureChange={this.handleChange}></TemperatureInput>
          <TemperatureInput scale='f' value={this.state.fahrenheit}  onTemperatureChange={this.handleChange}></TemperatureInput>
          <BoilingVerdict celsius={this.state.celsius}></BoilingVerdict>
        </fieldset>
    );
  }
}

export default Calculator;
