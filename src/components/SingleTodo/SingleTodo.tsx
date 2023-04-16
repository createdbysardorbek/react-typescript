import React from 'react'
import './Style.css';
import {Todo} from "../../model";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';

interface Props {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}: Props) => {

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return todo = {...todo, isDone: !todo.isDone}
            }
            return todo
        }))
    }

    return (
        <form className="single_todo">
            {
                todo.isDone ? (<s className="todos_single-text">{todo.todo}</s>) : (
                    <span className="todos_single-text">{todo.todo}</span>)
            }
            <div>
                <span className="icon">
                    <AiFillEdit/>
                </span>
                <span className="icon">
                    <AiFillDelete/>
                </span>
                <span className="icon">
                    <MdDone onClick={() => handleDone(todo.id)}/>
                </span>
            </div>
        </form>
    )
}
export default SingleTodo
