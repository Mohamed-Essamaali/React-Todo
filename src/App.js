import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state={
      todoList:[{name:'',selected:false}]
    }
  }

  toggleTodo = todoId=>{
    this.setState({
      todoList: this.state.toggleTodo.map(todo=>{
        if(todoId===todo.id){
          return {
            ...todo,selected: !todo.selected
          };
        }
        return todo

      })
    })

  }

  addTodo = todoName =>{
    let newTodo = {
      name:todoName,
      id: Date.now(),
      slected: false
    }
    this.setState({
      ...this.state,
      todoList: [...this.state.todoList,newTodo]
    }
   )
   console.log('new todo in app.js', newTodo)

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          toggleTodo={this.toggleTodo} 
          todoList={this.state.todoList}
        />

        <TodoForm 
          addTodo={this.addTodo}
        />
       
        
      </div>
    );
  }
}

export default App;
