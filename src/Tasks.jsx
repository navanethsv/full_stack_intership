import project from "./assets/project.jpeg"
function Tasks({ name, count,image = project }) {
  return (
    <div className="taskcard">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <h1>{count}</h1>
    </div>
  )
}

export default Tasks
