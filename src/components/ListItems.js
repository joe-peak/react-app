import React from 'react';
import ReactDOM from 'react-dom';

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
let arr = [1, 2, 3, 4]
let listItems = arr.map(item => 
  <WelcomeC tips={item} key={item}></WelcomeC>
);

let formatName = (user) => {
  return `${user.lastname}.${user.firstname}`;
};

let user = {
  firstname: 'Zhou',
  lastname: 'Joe'
};




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

export default ListItem;