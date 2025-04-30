"use client";
import { useState } from "react";
import Header from "../components/header";
import CourseGoal from "@/components/course-goal";
import CourseGoalList from "@/components/course-goal-list";
import logo from "../public/mango.jpg";
import styles from "./page.module.css";

type CourseGoal = {
  id: number;
  title: string;
  description: string;
};
export default function Home() {
  const [title, setTitle] = useState<string>("");
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const [description, setDescription] = useState<string>("");
  const [rentalCar, setRentalCar] = useState<string>("");
  function handleGoal() {
    setGoals((prevState: CourseGoal[]) => [
      ...prevState,
      {
        id: Math.random() * 10,
        title,
        description,
      },
    ]);
  }
  function handleRentalClick(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
  }
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
  }
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log("event", event.target.value);
    setRentalCar(event.target.value);
  }
  return (
    <div className={styles.page}>
      <Header img={logo} altText="logo">
        <input
          id="title"
          value={title}
          onChange={(event) => setTitle(event?.target?.value)}
          placeholder="Rent  Tesla"
        />
        <input
          id="description"
          value={description}
          onChange={(event) => setDescription(event?.target?.value)}
          placeholder="Tesla is EV car and sleeky, sexy car to drive"
        />
        <button type="button" onClick={handleGoal}>
          Add Me
        </button>
      </Header>
      <CourseGoalList goals={goals} />
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Please Select Ur Favourite Car
          <br />
          <select onChange={handleChange}>
            <option value="rentTesla">Rent Tesla</option>
            <option value="rentMercedez">Rent Mercedez</option>
            <option value="rentBmw">Rent BMW</option>
            <option value="rentHonda">Rent Honda</option>
          </select>
          <button type="submit" onClick={handleRentalClick}>
            Add Rental Car
          </button>
        </label>
      </form>
      <br />
      {rentalCar}
    </div>
  );
}
