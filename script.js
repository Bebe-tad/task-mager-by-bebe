let tasks = [
  { id: 1, text: "Design the UI", completed: false },
  { id: 2, text: "Implement features", completed: true },
  { id: 3, text: "Polish animations", completed: false }
];

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("newTask");
const counter = document.getElementById("counter");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    const span = document.createElement("span");
    span.textContent = task.text;
    span.onclick = () => toggleTask(task.id);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    delBtn.onclick = () => deleteTask(task.id);

    li.appendChild(span);
    li.appendChild(delBtn);
    taskList.appendChild(li);
  });

  counter.textContent = tasks.length;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  taskInput.value = "";
  renderTasks();
}

function toggleTask(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

taskInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") addTask();
});

// Initial render
renderTasks();
