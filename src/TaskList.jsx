import Task from './tasks'
import project from "./assets/project.jpeg"

function TaskList(){
    const tasks = [
       { 
         id: 1,
         name: "Total Projects",
         count: 24,
         image: project 
       },
       { 
         id: 2,
         name: "Total Tasks",
         count: 1248,
         image: project
       },
       {
         id: 3,
         name: "Active Members",
         count: 18,
         image: project
       }
    ]
    const tasklist = tasks.map((item) =>
        <Task key={item.id} name={item.name} count={item.count} image={item.image} />
    )
    return (
        <>
            {tasklist}
        </>
    )   
}

export default TaskList
