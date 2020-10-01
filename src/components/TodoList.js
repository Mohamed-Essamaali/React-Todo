// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'


class TodoList extends React.Component{
  
  

        render(){

            return(
                <div>
                    {this.props.todoList.map(todo=>{
                       return <Todo key={todo.id} todo={this.props.todo} toggleTodo={this.props.toggleTodo}/>
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
