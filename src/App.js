import React, {Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';
class App extends Component{

state = {
  id: uuid(),
  items: [],
  item: "",
  editItem: false
}

handleChange = (e) =>{
  this.setState ({
     item: e.target.value
  })
}



handleSubmit = (e) =>{
  e.preventDefault();

  const newItem = {
    id: this.state.id,
    title: this.state.item
  }

  const updateItems = [...this.state.items, newItem]

  this.setState({
    items: updateItems,
    id: uuid(),
    item: "",
    editItem: false
  })
}



clearList = () =>{
  this.setState({
    items: []
  })
}

handleDelete = (id) =>{
    const itemFilet = this.state.items.filter( item =>
        item.id !== id
      )

    this.setState({
      items: itemFilet
    })
}

editHandle = (id) =>{
  const filterItem = this.state.items.filter( item=> item.id !== id);
  const seletedItem = this.state.items.find( item=> item.id === id);

  this.setState({
    items:filterItem,
    item: seletedItem.title,
    id:id,
    editItem: true
  })
}

  render(){
    return(
       <div className="container">
          <div className="card">
            <div className="card-body">
            <h2 className="text-center">Todo React App</h2>
            </div>
          </div>

          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit = {this.handleSubmit}
            editItem={this.state.editItem}
          />
          <TodoList 
            items={this.state.items}
            clearList ={this.clearList}
            handleDelete={this.handleDelete}
            editHandle={this.editHandle}
          />

       </div>
    )
  }
}

export default App;


