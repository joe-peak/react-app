import React from 'react';
import ReactDOM from 'react-dom';

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

export default Toggle;