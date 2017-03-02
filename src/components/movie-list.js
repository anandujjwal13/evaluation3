import React from 'react';
import ListItem from './list-item'
const getResult= (moviesArray) => {
moviesArray.map((movie)=>{
return (<ListItem />)
})
}

export default ({normalisedData , actorName , allMovies}) => {
let moviesArray = (actorName === 'all') ? allMovies : normalisedData[actorName]
return (
     <ul className="todo-list">
      {getResult(moviesArray)}
    </ul>
)
}



  /*const todos = todoList
  let todoListItems = []
  for (let key in normalisedData) {
    todoListItems.push(<TodoListItem key={key}
      item={todos[key]}
      deleteItem={deleteItem}
      updateItem={updateItem}
      checkItem={checkItem} />)
  }*/
