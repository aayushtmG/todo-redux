import { MouseEventHandler } from "react"
import { useDispatch } from "react-redux"
import { removeTodo } from "./state/features/todoSlice.js"

type Todo = {
  index: number
  text: string
  id: string
  onDelete: MouseEventHandler<HTMLDivElement>
}
type todosProp = {
  todos: [Todo]
}
export default function Todos({ todos }: todosProp) {
  alert(todos)
  const dispatch = useDispatch()
  return (
    <div>
      {todos.map((todo, index) => (
        <div
          onClick={dispatch(removeTodo(todo.id))}
          className="flex cursor-pointer items-center gap-4 py-2 px-4 bg-gradient-to-r from-blue-600  to-blue-800 rounded-lg  text-lg font-semibold"
        >
          <span className="text-xl font-extrabold">{index}</span>
          <p>{todo.text}</p>
        </div>
      ))}
    </div>
  )
}
