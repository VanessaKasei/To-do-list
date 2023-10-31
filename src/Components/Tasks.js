import React, { useState } from "react";


const Tasks = () => {
  const [taskValue, setTaskValue] = useState(""); //store the added task using a string

  let onChange = (event) => {
    setTaskValue(event.target.value);
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
    </div>
  );
};

export default Tasks;
