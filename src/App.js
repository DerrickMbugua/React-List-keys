import logo from './logo.svg';
import './App.css';

function ListItems(props) {
  const numbers = props.numbers
  const lists = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>)

  return (
    <ul>{lists}</ul>
  )
}

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NewList(props){
  const numbers = props.numbers

  return (
    <ul>
       {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  )
}
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        {doubled}
        <div>
          <ListItems numbers={numbers} />
          <NewList numbers={numbers} />
        </div>

      </body>
    </div>
  );
}

export default App;
