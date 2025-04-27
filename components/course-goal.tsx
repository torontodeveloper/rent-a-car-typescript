import { ReactNode, FC } from "react";

type CourseGoalProps = {
  title: string;
  description: string;
  children: ReactNode;
};
const CourseGoal: FC<CourseGoalProps> = ({
  title,
  description,
  children,
}: CourseGoalProps) => {
  function handleGoal() {}
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {children}
      <button onClick={handleGoal}>Add Goal</button>
    </article>
  );
};
export default CourseGoal;
