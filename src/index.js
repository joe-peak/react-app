import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { FancyBorder} from './components/FancyBorder';
import Calculator from './components/Calculator';
import Clock from './components/Clock';
import ListItems from './components/ListItems';
import NameForm from './components/NameForm';
import Toggle from './components/Toggle';

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

//ReactDOM.render(<MyAppC />, document.getElementById('root'));
//ReactDOM.render(<WelcomeC tips='I am a class component...' />, document.getElementById('root'));
//ReactDOM.render(<WelcomeC tips='I am a functional component...'/>, document.getElementById('root'));

/**
 * Rend Clock
 */
//ReactDOM.render(<div><Clock title='test prpos' />,<Toggle /></div>, document.getElementById('root'));

/**
 * Rend NameForm
 */
ReactDOM.render(<NameForm/>,document.getElementById('root'));

/**
 * Rend FancyBorder
 */
/*ReactDOM.render(<  color='blue'>
                  <h2>I am nested ele</h2>
                </FancyBorder>,document.getElementById('root'));*/
/**
 * Rend Calculator
 */
//ReactDOM.render(<Calculator/>,document.getElementById('root'));
registerServiceWorker();
