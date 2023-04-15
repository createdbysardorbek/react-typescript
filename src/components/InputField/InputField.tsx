import React from 'react'
import './Style.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: (e:React.FormEvent) => void;
}

function InputField({todo, setTodo, handleAdd}: Props) {
    return (
        <form className="input" onSubmit={handleAdd}>
            <input
                type="input"
                placeholder="Enter a task"
                className="input_box"
                value={todo}
                onChange={event => setTodo(event.target.value)}
            />
            <button
                className="input_submit"
                type="submit"
            >Go</button>
        </form>
    )
}

export default InputField
