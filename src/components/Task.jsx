import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDoubleTap } from "use-double-tap";
import { Link } from "react-router-dom";

export const Task = ({ task, onDeleteProp, onToggle }) => {
  //event binding for double tap / double click touchscreen devices
  const bind = useDoubleTap(() => {
    // console.log("touch screen double tap");
    onToggle(task.id);
  });
  return (
    <div {...bind} className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDeleteProp(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
      <div style={{ display: "flex" }}>
        <p>
          <Link to={`/task/${task.id}`}>View Details</Link>
        </p>
        <p style={{ marginLeft: "10px" }}>
          <Link to={`/taskEdit/${task.id}`}>Edit Details</Link>
        </p>
      </div>
    </div>
  );
};
