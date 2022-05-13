import React from 'react'
import TodoItem from '../myComponents/TodoItem'
const Todos = (props) => {
  const containerStyle = {
    marginBottom:"120px"
  }
  return (
    <div className="container" style={containerStyle}>
      <h4 className="text-center my-3">Todos List</h4>
      {props.todos.length === 0 ? <h5 className='text-center my-5 pd-10 bg-dark text-light'>No TODOS!!!!!!</h5> :
        props.todos.map((todo) => {
          
          return <><TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr/>
          </>
          
          
        })
      }


    </div>
  )
}

export default Todos
