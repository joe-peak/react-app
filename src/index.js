import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let formatName = (user) => {
  return `${user.lastname}.${user.firstname}`;
};

let user = {
  firstname: 'Zhou',
  lastname: 'Joe'
};

/**
 * jsx拆分成多行，增强可读性,推荐包裹在圆括号当中避免不必要的错误
 */
const element = (
                  <div>
                      Hello, {formatName(user)}
                  </div>
                );
/**
 * 该写法与上面的写法等价
 */
const ele = React.createElement(
  'div',
  {},
  `Hello, ${formatName(user)}`
);

// Note: this structure is simplified
const elements = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
};  

/**
 * 更新渲染后的元素
 */

/*let tick = ()=>
{
  let ele = (
    <div>
      <h1>Hello</h1>
      <p>{new Date().toString()}</p>
    </div>
  ); 

  ReactDOM.render(ele, document.getElementById('root'));
}

setInterval(tick, 1000);  */

/**
 * Functional Component
 */
let Welcome = (props) => {
  return (
    <div>
      <h2>Hello, {formatName(user)}</h2>
      <p>{props.tips}</p>
    </div>
  );
};

class WelcomeC extends React.Component { 
  render() {
    return (
      <div>
        <h2>Hello, {formatName(user)}</h2>
        <p>{this.props.tips}</p>
      </div>
    );
  }
};

let MyApp = (props) => {
  return (
    <div>
      <WelcomeC tips='funtional组件嵌套'></WelcomeC>
      <Welcome tips='class组件嵌套'></Welcome>
    </div>
  );
};

class MyAppC extends React.Component{
  render()
  {
    return (
      <div>
        <WelcomeC tips='funtional组件嵌套'></WelcomeC>
        <Welcome tips='class组件嵌套'></Welcome>
      </div>
    );
  }
};

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

class Toggle extends React.Component{
  constructor(props)
  {
    super(props);
    this.state = { isToggle: true };
    /**
     * this指向问题解决方法1
     */
    this.toggle=this.toggle.bind(this);
  }
  
  toggle()
  {
    this.setState((prevState, props) => ({ isToggle: !prevState.isToggle }));
  }

  /**
   * this指向问题解决方法2,该语法目前还是es6实验性的
   *方法3，调用的时候通过箭头函数调用。
   */  
 /* toggle=()=>{
    this.setState((preState, props) => ({ isToggle: !preState.isToggle }));
  }*/

  render()
  {
    return (
      <div>
        <button onClick={this.toggle}>Are you okay? </button>
        <div>{this.state.isToggle ? 'Yes' : 'No'}</div>
        {
          this.state.isToggle &&
          (
            <div>I am nice 3Q.</div>
          )
        }
      </div>
    );
  }
}

let arr=[1, 2, 3, 4]
let listItems = arr.map(item => 
  <WelcomeC tips={item} key={item}></WelcomeC>
);

class ListItem extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    /*let items=this.props.items.map(((item,index)=><p key={index}>{item}</p>));
    return <div>{items}</div>;*/
    return (
      <div>
        {
          this.props.items.map(((item,index)=>
          <p key={index}>
            {item}
          </p>))
        }
      </div>
    );
  }

  componentWillMount()
  {
    console.log(listItems)
  }
}

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
    alert(this.state.value);
  }

  render()
  {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" onChange={this.handleChange}/>
        </label>
        <p>{this.state.value}</p>
         <input type="submit" value="Submit" />
      </form>
    );
  }
}

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

class Calculator extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      celsius:0
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e)
  {
    this.setState({celsius:e.target.value});
  }

  render()
  {
    return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input type="text" onChange={this.handleChange}/>
          <BoilingVerdict celsius={this.state.celsius}></BoilingVerdict>
        </fieldset>
    );
  }
}

/*class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"  onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}*/
//ReactDOM.render(<MyAppC />, document.getElementById('root'));
//ReactDOM.render(<WelcomeC tips='I am a class component...' />, document.getElementById('root'));
//ReactDOM.render(<WelcomeC tips='I am a functional component...'/>, document.getElementById('root'));
/**
 * Rend Clock
 */
//ReactDOM.render(<div><Clock title='test prpos' />,<Toggle /></div>, document.getElementById('root'));
let items=[1,2,3,4];
//
//ReactDOM.render(<NameForm/>,document.getElementById('root'));
ReactDOM.render(<Calculator/>,document.getElementById('root'));
registerServiceWorker();
