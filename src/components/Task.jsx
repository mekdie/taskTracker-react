import React from "react";
import { FaTimes } from "react-icons/fa";
export const Task = ({ task, onDeleteProp, onToggle }) => {
  return (
    <div
      onDoubleClick={() => onToggle(task.id)}
      className={`task ${task.reminder ? "reminder" : ""}`}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDeleteProp(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
