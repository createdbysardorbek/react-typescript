import React from 'react'
import './Style.css';
import SingleTodo from "../SingleTodo/SingleTodo";
import {Todo} from "../../model";


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos}: Props) => {
    return (
        <div className="todos">

            {todos.map(todo => {
                return (
                    <SingleTodo
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                        setTodos={setTodos}
                    />)
            })}
        </div>
    )
}
export default TodoList

