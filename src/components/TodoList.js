// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'


class TodoList extends React.Component{
  
  

        render(){

            return(
                <div className='todoList'>
                    {this.props.todoList.map(todo=>{
                        console.log('todo in todolist',todo)
                       return <Todo key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo}/>
                    })

                    }
                    <button className="clear-btn" onClick={this.props.clearTodos}>
                        Clear Todos
                    </button>
                                    
                    
                </div>
            )
        }
    
}
export default TodoList
