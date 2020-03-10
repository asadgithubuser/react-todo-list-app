import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

    render(){
        const {items, clearList , handleDelete, editHandle} = this.props;
        
        return(
            <div>
                  <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <h4>Todo List</h4>
                    {
                        items.map( item => {
                           return <TodoItem
                             key={item.id}
                             title={item.title}
                             handleDelete2 = { () => handleDelete(item.id)}
                             editHandle = {() => editHandle(item.id)}
                             />
                        })
                    }
                    <button
                     type="button"
                     className="btn pull-right mt-3 btn-secondary btn-sm"
                     onClick={clearList}
                    >Clear All</button>
                    </div>
                 </div>
            </div>

        )
    }
}

export default TodoList;