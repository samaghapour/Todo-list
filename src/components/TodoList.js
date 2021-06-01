import React from 'react'
import Todo from './Todo'

 const TodoList = ({filteredTodos,todos,setTodos}) => {

    return (
        <ul className="todoList">
            {filteredTodos!== null && filteredTodos.map(todo => {
                return(
                    <Todo todo={todo}  todos={todos} setTodos={setTodos} key={todo.id}/>
                )
            })}
        </ul>
    )
}

export default TodoList