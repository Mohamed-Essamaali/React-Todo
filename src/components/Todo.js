import React from 'react'


class Todo extends React.Component{

    // constructor(){
    //     super();

    //     this.state={
    //         todo:''
    //     }
    // }
 
    render(){

        return(
        <div onClick={()=>this.props.toggleTodo(this.props.todo.id)}
         className={`todo${this.props.selected ? ' selected':''}`}
        >   

         <p className='todo '>{this.props.name}</p>
       
    </div>)
    }
   
    
       
}

    

export default Todo;