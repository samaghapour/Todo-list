import React from 'react'

 const Filter = ({setFilterName}) => {
    // filterName state will change whenever select change
    const filterTodoFunc = (e) => {
        setFilterName(e.target.value)
    }

    return (
        <div className="filterDiv">
            <select onChange={filterTodoFunc} id="filterOptions">
                <option value="All">All</option>
                <option value="completed">completed</option>
                <option value="notCompleted">not completed</option>
            </select>
        </div>
    )
}

export default Filter