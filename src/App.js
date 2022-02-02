import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// function App(user) {

//   return (
//     <div className="App">
//       {/* <div id="root">{user.firstName + ' ' + user.lastName}</div> */}
//       <div id="root"></div>
//       <div id="root2"></div>
//     </div>
//   );
// }

// const element = (
//   <h1>
//     {/* Hello, {App(user)}! */}
//     Hello, world!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Yeonsu" />
//       <Welcome name="Sara" />
//     </div>
//   );
// }
// //const element = <Welcome name="Yeonsu" />;

// ReactDOM.render(<App />, document.getElementById('root'));

// export default App;


/*컴포넌트 추출*/
// function Component(props) {
//   return (
//     <Comment user={props.author}/>
//   );
// }

// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.author}/>
//       <div className="UserInfo-name">
//         {props.author.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author}/>
//       <div className="Comment-text"> 
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }


/*state와 생명주기*/
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }
  
//   componentDidMount() {
//     this.timerId = setInterval(
//       () => this.tick(), 1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerId);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );


/*이벤트 처리하기*/
// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//     <button type="submit">
//       Submit
//     </button>
//     </form>
//   );
// }

// ReactDOM.render(
//   <Form />,
//   document.getElementById('root')
// );

// function App() {
// // function Form() {
// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     console.log('You clicked submit');
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //     <button type="submit">
// //       Submit
// //     </button>
// //     </form>
// //   );
// // }

// // ReactDOM.render(
// //   <Form />,
// //   document.getElementById('root')
// // );
// }


// /*이벤트처리하기 ON OFF*/
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

/*이벤트처리하기 Click me*/
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }
  render() {
    return (
        <button onClick={() => this.handleClick()}>
          Click me
        </button>
    )
  }
}

ReactDOM.render(
  <LoggingButton />,
  document.getElementById('root')
);