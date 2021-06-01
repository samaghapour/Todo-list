import React, { Fragment } from 'react'

 const Todo = ({todo,todos,setTodos}) => {

    // remove todo handler
    const removeTodoFunc = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    // completed Todo handler
    const completedTodoFunc = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
               return{
                   ...item,
                   completed: !item.completed
               }
            }
            return item
        }))
    }
    return (
        <Fragment>
                <li>
                    <p className={`todoText ${todo.completed ? 'completed' : ''}`}>{todo.text}</p>
                    <div className="icons">
                        <i className="fa fa-trash"  onClick={removeTodoFunc}></i>
                        <i onClick={completedTodoFunc} className="fa fa-check"></i>
                    </div>
                </li>
            
        </Fragment>
    )
}

export default Todo