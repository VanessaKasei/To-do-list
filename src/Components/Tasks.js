import React, { useState } from "react";

const Tasks = () => {
  const [taskValue, setTaskValue] = useState(""); //store the added task using a string
  const [tasks, setTasks] = useState([]); //store all tasks in an array
  let onChange = (event) => {
    setTaskValue(event.target.value);
  };

  const Add = () => {
    if (taskValue.trim() !== "") {
      setTasks([...tasks, taskValue]); //add new task
    }
    setTaskValue(""); //clear the entered task
  };

  return (
    <div className="to-dos">
      <div className="title">
        <h3>My to do's</h3>
      </div>
      <div>
        <input
          placeholder="Enter a task..."
          value={taskValue}
          onChange={onChange}
        />

        <button onClick={Add}>Add</button>
      </div>
      <div>
                <h3>Tasks</h3>
                <ol>
                    {tasks.map(( task, index ) => (
                        <li key={index}>
                            {task}
                        </li> //create a list of added tasks
                    ))}
                </ol>
            </div>
    </div>
  );
};

export default Tasks;
