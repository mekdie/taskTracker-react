import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import { Tasks } from "./components/Tasks";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";
import Footer from "./components/Footer";

// useState: use the state as the on from class
// useEffect: use to deal with sideEffects, used when something to happen on page load
import { useState, useEffect } from "react";
//this is a functional component jsx instead of the class components

import About from "./components/About";

function App() {
  const [showAddTask, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);

  //do something after render is complete
  useEffect(() => {
    //need to be async because fetchTasks is returning a promise
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Fetching data from db.json server

  const fetchTasks = async () => {
    // wait until fetch is complete then put into the res variable

    //because fetch return a promises so we need to await
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    //ui only
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Fetching singular data to update from db.json server
  const fetchTask = async (id) => {
    // wait until fetch is complete then put into the res variable

    //because fetch return a promises so we need to await
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //Set Reminder on double click add specific class
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const taskUpdate = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskUpdate),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //Add Task function
  const addTask = async (taskToBeAdded) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskToBeAdded),
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // == BEFORE JSON SERVER == //
    //id is not needed anymore because json server will provide the id for you
    // console.log(taskToBeAdded);
    // const id = Math.floor(Math.random() * 10000) + 1; //giving random id
    // //add a new task by inserting id and all values from taskToBeAdded
    // const newTask = { id, ...taskToBeAdded };
    // //set as an array by copying the current task that does already exists (tasks), and also add a new task onto it
    // // [{obj1}, {obj2}, {obj3}....., {newObj}] array of objects
    // setTasks([...tasks, newTask]);
  };
  // const name = "Brad";
  return (
    <Router>
      <div className="container">
        {/* set the value of boolean into the opposite like on /off */}
        <Header onAdd={() => setShow(!showAddTask)} bool={showAddTask} />

        {/* like a fragment / component that shows depends on the URL  */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* if both of them are false, then doesn't show at all and vice versa  */}
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasksProp={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Task found"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
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
