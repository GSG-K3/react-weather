import React ,{Component}from 'react';
import './App.css';
import AddTodo from './component/AddTodo';
import TitleTodo from './component/TitleTodo'
import TodoList from './component/TodoList'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

class App extends Component{
      render(){
      return (
        <div className="App">
          <TitleTodo/>
        
        </div>
      );
  }
}

export default App;
