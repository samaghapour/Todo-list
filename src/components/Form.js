import React from 'react'

const Form = ({todos,setTodos,todoText,setTodoText}) => {
    // add todo handler
    const addTodoFunc = (e) => {
        e.preventDefault();
        
        if(todoText !== ''){
            setTodos([...todos,{
                id: Math.random() * 2,
                text: todoText,
                completed: false 
            }]);
    
            setTodoText('')
        } else{
            alert('please write something!')
        }
    }


    return (
        <form className="formDiv">
            <input value={todoText} onChange={(e) => setTodoText(e.target.value)} type="text" className="todoInput" placeholder="what you planning to do?.." />
            <input onClick={addTodoFunc} type="submit" value="Add To List" className="addBtn" />
        </form>
    )
}

export default Form