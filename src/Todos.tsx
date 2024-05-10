import { MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
//@ts-ignore
import { removeTodo } from "./state/features/todoSlice.js"

type Todo = {
  index: number
  text: string
  id: string
  onDelete: MouseEventHandler<HTMLDivElement>
}
type todosProp = {
  todos: [Todo]
  updateTodo: Function
}
export default function Todos({ todos, updateTodo }: todosProp) {
  const dispatch = useDispatch()
  return (
    <div className="space-y-2 w-1/2">
      {todos.map((todo, index) => (
        <div
          key={index}
          onClick={() => dispatch(removeTodo(todo.id))}
          className="flex justify-between cursor-pointer items-center gap-4 py-2 px-4 bg-gradient-to-r from-blue-600  to-blue-800 rounded-lg  text-lg font-semibold"
        >
          <div className="flex gap-3">
            <span className="text-xl font-extrabold">{++index}</span>
            <p>{todo.text}</p>
          </div>
          <div className="flex items-center ">
            <label
              htmlFor="todoInput"
              className="icon-[mdi--pencil-box-outline] text-2xl hover:scale-110"
              onClick={(e) => updateTodo(e, todo.id)}
            ></label>
          </div>
        </div>
      ))}
    </div>
  )
}
