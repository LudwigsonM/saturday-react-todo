import './App.css';
import TodoItemList from './components/TodoItemList';
import TodoItem from './components/TodoItems';

function App() {

const itemList = [
  {title: "Need Bread", isCompleted: true},
  {title: "Need Butter", isCompleted: false},
  {title: "Need Booze", isCompleted: false},
  {title: "Need Banana", isCompleted: false},
  {title: "Need Berries", isCompleted: false},

]

  return (
    <div className="App">
      <header className="App-header">
        <TodoItemList items={itemList}/>
      </header>
    </div>
  );
}

export default App;
