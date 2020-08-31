// TODO
var App = () => (
  <div>Howdy
  <h2>Grocery list</h2>
  <TodoList todos={['Kale', 'Cucumbers']}/>
</div>
);

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
  };


  onListItemClick() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }
}

var TodoList = (props) => (
  // var onListItemClick = (event) => {
  //   console.log('I got clicked');
  // };
  //   return (
      <ul>
        {props.todos.map(todo =>
          <TodoListItem todo={todo} />
        )}
      </ul>
    // );
);

ReactDOM.render(<App />, document.getElementById("app"));
