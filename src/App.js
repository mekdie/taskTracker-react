import React, { Component } from "react";

import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";
//this is a functional component jsx instead of the class components

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Lunch at Padang",
      day: "Feb 8th at 12:30pm",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Set Reminder on double click add specific class
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //Add Task function
  const addTask = (taskToBeAdded) => {
    // console.log(taskToBeAdded);
    const id = Math.floor(Math.random() * 10000) + 1; //giving random id

    //add a new task by inserting id and all values from taskToBeAdded
    const newTask = { id, ...taskToBeAdded };

    //set as an array by copying the current task that does already exists (tasks), and also add a new task onto it

    // [{obj1}, {obj2}, {obj3}....., {newObj}] array of objects
    setTasks([...tasks, newTask]);
  };
  // const name = "Brad";
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasksProp={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "No Task found"
      )}
    </div>
  );
}

// this is a class component

// class App extends Component {
//   state = {};
//   render() {
//     return <h1>This is a class component</h1>;
//   }
// }

export default App;
