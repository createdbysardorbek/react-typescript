import React from 'react'
import './Style.css';
import SingleTodo from "../SingleTodo/SingleTodo";
import {Todo} from "../../model";
import {Droppable} from "react-beautiful-dnd";


interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    completedTodos: Todo[],
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}: Props) => {
    return (
        <div className="container">
            <Droppable droppableId="TodosList">
                {
                    (provided) => (
                        <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos_heading">
                                 Active Tasks
                            </span>
                            {
                                todos.map((todo, index) => {
                                    return (<SingleTodo
                                        index={index}
                                        todos={todos}
                                        todo={todo}
                                        setTodos={setTodos}
                                    />)
                                })
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>

            <Droppable droppableId="RemoveTodos">
                {
                    (provided) => (
                        <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
                            <span className="todos_heading">
                                Completed Tasks
                            </span>
                            {
                                completedTodos.map((todo, index) => {
                                    return (<SingleTodo
                                        index={index}
                                        todos={completedTodos}
                                        todo={todo}
                                        setTodos={setCompletedTodos}
                                    />)
                                })
                            }
                            {provided.placeholder}
                        </div>)
                }
            </Droppable>

        </div>
    )
}
export default TodoList

