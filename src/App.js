import "./App.css";
import { useState } from "react";
import { FaPlus, FaTrash, FaEdit, FaSave } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Track the index of the task being edited
  const [editText, setEditText] = useState(""); // Store the text of the task being edited

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index) => {
    setEditingIndex(index); // Set the task to edit mode
    setEditText(tasks[index]); // Pre-fill the input field with the current task text
  };

  const handleSaveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editText.trim(); // Save the updated task text
    setTasks(updatedTasks);
    setEditingIndex(null); // Exit edit mode
  };

  return (
    <div className="App">
      <div className="contain">
        <h2>To-Do App</h2>
        <hr />
        <div className="inputs">
          <input
            className="enter"
            placeholder="Enter task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="add-btn" onClick={handleAddTask}>
            <FaPlus />
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {editingIndex === index ? (
                <>
                  <input
                    className="edit-input"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button
                    className="save-btn"
                    onClick={() => handleSaveTask(index)}
                  >
                    <FaSave />
                  </button>
                </>
              ) : (
                <>
                  <span>{task}</span>
                  <div className="task-buttons">
                    <button
                      className="edit-btn"
                      onClick={() => handleEditTask(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDeleteTask(index)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
