document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // get the value of the new task
    const task = e.target["new-task-description"].value;

    // create list element and add the new task
    const newTask = document.createElement("li");
    newTask.innerText = task;

    // add a delete button and append it to the new task
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function () {
      // Remove the task item when the delete button is clicked
      tasks.removeChild(newTask);
    });

    // Add the delete button to the task item
    newTask.appendChild(deleteButton);

    // Add the task item to the task list
    tasks.appendChild(newTask);

    // reset the form
    form.reset();
  });
});
