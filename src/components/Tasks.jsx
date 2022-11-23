import React from "react";
import { Task } from "./Task";
export const Tasks = ({ tasksProp, onDelete, onToggle }) => {
  return (
    // this is a list generated from objects using map
    <div>
      {tasksProp.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteProp={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};
