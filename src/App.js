import './App.css';
import Template from './components/Template';
// import TodoList from "./components/TodoList";
import { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import useFetch from './util/useFetch';

function App() {
  // const [todos, setTodos] = useState(null);

  // useEffect(() => {
  //   fetch("http://localhost:3001/todos")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error("could not fetch the data for that resource");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTodos(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);

  const { todos, setTodos } = useFetch('http://localhost:3001/todos');

  return (
    <div className="App">
      <Template todos={todos} setTodos={setTodos}></Template>
    </div>
    // <>{console.log(todos)}</>
  );
}

export default App;
