import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { Button } from "./Button";

import React from "react";

const TaskEdit = ({ onEdit }) => {
  //   console.log(fetchTask);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");

  //hooks
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        setError("Task not found");
      }

      //SET THE TEXT HERE USING THE DATA FOR INITIAL VALUE
      setText(data.text);
      setDay(data.day);
      setReminder(data.reminder);
      //setLoading to false to after fetching can show the details
      setLoading(false);
    };
    fetchTask();
  }, []);
  //dependancy

  //edit section
  //state variable, setter variable, and default value (like constructor) respectively

  const onSubmit = (e) => {
    e.preventDefault(); // so it does not submit to a page

    onEdit(params.id, { text, day, reminder });

    navigate("/");
  };

  if (error) {
    return <Navigate to="/" />;
  }

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Edit Task"
            defaultValue={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Edit Day & Time"
            defaultValue={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            className="text"
            type="checkbox"
            checked={reminder}
            defaultValue={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Update" />
      </form>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        text="Go Back"
      />
    </div>
  );
};

export default TaskEdit;
