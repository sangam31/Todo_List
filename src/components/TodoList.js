import React from 'react'
import Todo from './Todo'

function TodoList({ todos, setTodos, filteredTodos }) {

    //console.log(todos)

    return (
        <div className='todo-container'>
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo 
                    todo={todo}
                    setTodos={setTodos} 
                    todos={todos}
                    text={todo.text}
                    key={todo.id} />
                ))}
            </ul>
            
        </div>
    )
}

export default TodoList 
