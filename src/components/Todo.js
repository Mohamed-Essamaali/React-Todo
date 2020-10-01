import React from 'react'
import TodoForm from './TodoForm'

class Todo extends React.Component{

    constructor(){
        super();

        this.state={
            todo:''
        }
    }
 
    render(){

        return(
        <div onClick={()=>this.toggleTodo(this.state.todo.id)}
        className={`todo${this.state.todo.selected? ' selected':''}`}
        >   

         <p className='todo '>{this.state.todo}</p>
       
    </div>)
    }
   
    
       
}

    

export default Todo;