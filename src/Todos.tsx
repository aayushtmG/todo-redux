type todosProp = {
  text: string
}
export default function Todos({ text }: todosProp) {
  return <div>{text}</div>
}
