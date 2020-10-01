import React from 'react'

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            todo:''
        }
    }
    handleChange = e=>{
      this.setState({
          
          ...this.state,
          todo:e.target.value
        
      }) 
      console.log('new todo',this.state.todo) 
    }
    submitForm =(e)=>{
        e.preventDefault();

        this.addTodo(this.state.todo.id)
    }
    render(){
        return(<div>
            <form>
                <input type='text' name='todo' value={this.state.todo} onChange={this.handleChange}/>
                <button >Add Todo</button>
             </form>
         </div>
        )
    }
  
}
export default TodoForm;