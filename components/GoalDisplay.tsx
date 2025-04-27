type CourseGoal = {
    id:number,
    title:string,
    description:string
  }

const GoalDisplay=({id,title,description}:CourseGoal)=>{
    return(
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default GoalDisplay