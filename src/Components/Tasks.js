import React, { useState } from "react";
import "./Tasks.css";

const Tasks = () => {
  const [taskValue, setTaskValue] = useState(""); //store the added task using a string
  const [tasks, setTasks] = useState([]); //store all tasks in an array
  const [editingTask, setEditingTask] = useState(null); // keep track of the task being edited
  const [editedText, setEditedText] = useState(""); //update text of the task
  const [error, showError] = useState(null);

  let onChange = (event) => {
    setTaskValue(event.target.value);
  };

  const Add = () => {
    if (validateInput(taskValue)) {
      setTasks([...tasks, taskValue]);
      setTaskValue(""); //clear the entered task
      showError(null);
    } else {
      showError("Enter a task!"); // error message to be displayed for adding blank "input"
    }
  };

  const deleteTask = (removedTask) => {
    setTasks(tasks.filter((task) => task !== removedTask));
  }; // delete a task
  const editTask = (taskToEdit) => {
    setEditingTask(taskToEdit);
    setEditedText(taskToEdit);
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) =>
      task === editingTask ? editedText : task
    );
    setTasks(updatedTasks);
    setEditingTask(null); // Exit edit mode
  };
  const validateInput = (input) => {
    return input.trim() !== "";
  }; //checks if the input is empty
  return (
    <div className="to-dos">
      {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
      <div className="title">
        <h3>My to-do's</h3>
      </div>
      <div>
        <input
          className="input-field"
          placeholder="Enter a task..."
          value={taskValue}
          onChange={onChange}
        />

        <button onClick={Add} className="add-button">
          Add
        </button>
      </div>
      <div>
        <h3>Do's</h3>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              {editingTask === task ? ( // Checks if the task is being edited
                <div>
                  <input
                    type="text"
                    value={editedText}
                    onChange={(event) => setEditedText(event.target.value)}
                  />
                  <button
                    onClick={() => saveEditedTask(editedText, task)}
                    className="save-button"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  {task}
                  <button
                    onClick={() => deleteTask(task)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => editTask(task)}
                    className="edit-button"
                  >
                    Edit
                  </button>
                </div>
              )}
            </li> //create a list of added tasks
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Tasks;
