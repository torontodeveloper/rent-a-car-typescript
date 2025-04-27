"use client";
import GoalDisplay from "./GoalDisplay";

type CourseGoalList = {
  goals: {
    id: number;
    title: string;
    description: string;
  }[];
};
type CourseGoal = {
  id: number;
  title: string;
  description: string;
};
const CourseGoalList = ({ goals }: CourseGoalList) => {
  return (
    <div>
      <ul>
        {goals?.map((goal: CourseGoal, index: number) => (
          <GoalDisplay key={index} {...goal} />
        ))}
      </ul>
    </div>
  );
};
export default CourseGoalList;
