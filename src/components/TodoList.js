// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    constructor(){
        super();
        this.state={
            todoList:[]
        }
    }

        render(){

            return(
                <div>
                    <Todo todoList={this.todoList}/>
                </div>
            )
        }
    
}
export default TodoList
