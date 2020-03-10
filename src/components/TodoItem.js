import React, {Component} from 'react';

class TodoItem extends Component{

    render(){
        const {title, handleDelete2, editHandle} = this.props;
        return(
               <div className="card">
                   <li className="list-group-item justify-content-between d-flex">
                       <h6>{title}</h6>
                       <div className="todo-icon">
                           <span onClick={editHandle} className="mx-2 text-success">
                           <i className="fa fa-edit" />
                           </span>
                           <span className="mx-2 text-danger" onClick={handleDelete2}>
                               <i className="fa fa-trash" />
                           </span>
                       </div>
                   </li>
               </div>
         )
    }
}

export default TodoItem;