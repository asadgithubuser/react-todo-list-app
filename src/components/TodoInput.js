import React, {Component} from 'react';

class TodoInput extends Component{

    render(){
        const{item, handleChange, handleSubmit, editItem} = this.props;
        return(
           <div>
                <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <h4 className="">Todo Input</h4>
                   
                   <form onSubmit={handleSubmit}>
                       <input onChange={handleChange} value={item} type="text" id="input" className="form-control" placeholder="add a todo item" />
                       <button type="submit" className={
                           editItem ? 'btn btn-primary mt-2 pull-right': 'btn btn-success mt-2 pull-right'
                       }>
                           {editItem ? 'Edit Item': 'Add Item'}
                           </button>
                   </form>
                </div>
           </div>
           </div>
        )
    }
}

export default TodoInput;