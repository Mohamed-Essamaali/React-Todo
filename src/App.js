import React from 'react';


import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';
import './components/Todo.css'

let todoList= [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todoList:[{name:'First Todo',selected:false}]
    }
  };
    
  
    addTodo = todoName =>{
      let newTodo = {
        name:todoName,
        id: Date.now(),
        selected: false
      }
        this.setState({
          ...this.state,
          todoList: [...this.state.todoList,newTodo]
        }
      )
       console.log('new todo added in app.js', newTodo)

    }

    toggleTodo = todoId=>{
      this.setState({
        todoList: this.state.todoList.map(todo=>{
          if(todoId===todo.id){
            return {
              ...todo,selected: !todo.selected
            };
          }
          return todo
  
        })
      })
  
    }


  clearTodos = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => !todo.selected)
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Welcome to your Todo App!</h2>

        <TodoForm  addTodo={this.addTodo}/>

        <TodoList 
          toggleTodo={this.toggleTodo} 
          todoList={this.state.todoList}
          clearTodos={this.clearTodos}

          
        />

        
       
        
      </div>
    );
  }
}

export default App;
