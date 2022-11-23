import React, { Component } from "react";

import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
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
      text: "Meeting at Babio",
      day: "Feb 6th at 1:30pm",
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
  // const name = "Brad";
  return (
    <div className="container">
      <Header />
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
