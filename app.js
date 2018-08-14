// TODO

// Note on editor: somehow, this example is not fully recognized as JS, by Sublime
  // Good that at least VS Code works
// var App = () => (
//   <div>
//     Some cliche salutation
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("actual-dom-element-where-I-want-to-render-my-component"));


//[Step] Creating and rendering a React component
// var GroceryList = () => (
//   <ul>
//     <li>'cucumbers'</li>
//     <li>'kale'</li>
//   </ul>  
// );
//ReactDOM.render(<GroceryList />, document.getElementById("app"));

//[Step] Creating and rendering nested React components
// var Cucumbers = () => (
//   <li>'cucumbers'</li>
// );
// var Kales = () => (
//   <li>'kale'</li>
// );
// var GroceryList = () => (
//   <ul>
//     <li>Cucumbers</li>
//     <li>Kale</li>
//   </ul>  
// );
// ReactDOM.render(<GroceryList />, document.getElementById("app"));

//[Step] Component Properties aka "props"
// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.grocery[0]}</li>
//     <li>{props.grocery[1]}</li>
//   </ul>
// );
// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem grocery={['cucumbers', 'kale']}/>
//   </div>
// );
// ReactDOM.render(<GroceryList />, document.getElementById("app"));


//[Step] Making applications interactive with state, with user events
//Refactor GroceryListItem to be a class component
//Also, add state to the class, for click effect -> [Todo] do this later, if having time
class GroceryListItemClass extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   done: false
    // };
  }

  // onListItemClick() {
  //   this.setState()( {
  //     done: !this.state.done
  //   });
  // }
  render() {
    // var style = {
    //   textDecoration: this.sate.done ? 'line-through' : 'none'
    // };
    return (
      <li>{this.props.grocery}</li>
    );
    // return (
    //   <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    // )
  }
}
var GroceryListItem = (props) => (
  <ul>
    {props.grocery.map(groceryItem =>
      // Note: the prior name needs to match the prop name (as above class), whereas the latter name can be anything (just a parameter)
      <GroceryListItemClass grocery={groceryItem} />
      //<GroceryListItemClass grocery={['apple', 'orange', 'egg']} />
    )}
  </ul>
);
var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem grocery={['cucumbers', 'kale', 'egg']}/>
  </div>
);
ReactDOM.render(<GroceryList />, document.getElementById("app"));


// class GroceryListClass extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <li>{this.props.list}</li>
//     );
//   }
// }

// var GroceryListItem = (props) => (
//   <ul>
//     {props.list.map(list =>
//       <GroceryListClass list={list} />
//     )}
//   </ul>
// );


// var GroceryList = () => (
//   <div>
//     <h2>My Grocery List</h2>
//     <GroceryListItem list={['milk', 'cereal', 'chicken']} />
//   </div>
// );


ReactDOM.render(<GroceryList />, document.getElementById("app"))