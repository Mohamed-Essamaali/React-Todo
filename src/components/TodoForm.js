import React from 'react'

class TodoForm extends React.Component{

    constructor(){
        super();
        this.state={
            newtodo:''
        }
    }
    handleChange = e=>{
      this.setState({...this.state,newtodo:e.target.value}) 
      console.log('new todo',this.state.newtodo) 
    }
    submitForm =(e)=>{
        e.preventDefault();

        this.props.addTodo(this.state.newtodo);
        console.log('form submitted', this.state.newtodo)
        this.setState({newtodo:''})
    }
    render(){
        return(<div>
            <form onSubmit={this.submitForm}>
                <input type='text' name='todo' value={this.state.newtodo} onChange={this.handleChange}/>
                <button >Add Todo</button>
             </form>
         </div>
        )
    }
  
}
export default TodoForm;