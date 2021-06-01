import React , {useEffect,useState }from 'react';
import './App.css';
// importing components
import Form from './components/Form'
import TodoList from './components/TodoList'
import Filter from './components/Filter'


const App = () => {
      // states
      const [todos,setTodos] = useState([]);
      const [todoText,setTodoText] = useState('');
      const [filterName,setFilterName] = useState('All')
      const [filteredTodos,setFilteredTodos] = useState([])

        // setTodos from local storage 
      useEffect(() =>{
            if(localStorage.getItem('todos') === null){
                localStorage.setItem('todos',JSON.stringify([]))
            } else {
              setTodos(JSON.parse(localStorage.getItem('todos')))
            }
        },[])

        //set filter todos to selected option whenever todos array or filter options changed
      useEffect(() => {
        filterTodoListFunc()
        // update localstorage whenever option or todos array changed
        localStorage.setItem('todos',JSON.stringify(todos));
        //eslint-disable-next-line
      },[todos,filterName])    

    

  
     

       // filter todoList handler
    const filterTodoListFunc = () => {
        
      switch(filterName){
          case 'completed' :  setFilteredTodos(todos.filter(item => item.completed === true))
          break;
          case 'notCompleted' :  setFilteredTodos(todos.filter(item => item.completed === false))
          break;

          default: setFilteredTodos(todos)
          break; 
      }
      
  }

  return(
      
        <div className="card">
          <Form  todos={todos} setTodos={setTodos} todoText={todoText} setTodoText={setTodoText}/>

          <TodoList filteredTodos={filteredTodos} todos = {todos}setTodos={setTodos}/>
          
          <Filter filterName={filterName} setFilterName={setFilterName}/>
        </div>
      
    )
   
  }


  

export default App