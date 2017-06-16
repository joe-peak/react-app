import React from 'react';
import ReactDOM from 'react-dom';
class FancyBorder extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className={`FancyBorder FancyBorder-${this.props.color}`}>
        {this.props.children}
      </div>
    );
  }
}

class SplitPane extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <div className='SplitPane'>
        <div className="SplitPane-Left">
           {this.props.left}
        </div>
        <div className="SplitPane-Right">
           {this.props.right}
        </div>
      </div>
    );
  }
}

class MyApp extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <SplitPane left={<FancyBorder />} right={<FancyBorder />}></SplitPane>
    )
  }
}
export {FancyBorder,MyApp};

