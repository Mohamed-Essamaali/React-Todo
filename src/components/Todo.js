import React from 'react'


class Todo extends React.Component{


 
    render(){

        return(
        <div onClick={()=>this.props.toggleTodo(this.props.todo.id)}
         className={`todo${this.props.todo.selected ? ' selected':''}`}
        >   
            
         <p>{this.props.todo.name}</p>
       
    </div>)
    }
   
    
       
}

    

export default Todo;