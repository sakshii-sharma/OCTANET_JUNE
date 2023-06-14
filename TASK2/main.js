// Get the task list container
const taskListContainer = document.getElementById('tasks');

// Function to add a new task
function addTask() {
  // Get the task input values
  const taskInput = document.getElementById('task');
  const deadlineInput = document.getElementById('deadline');
  const priorityInput = document.getElementById('priority');
  const labelInput = document.getElementById('label');

  // Create a new task item
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');

  // Create content div
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');

  // Create input element for task name
  const taskNameInput = document.createElement('input');
  taskNameInput.type = 'text';
  taskNameInput.classList.add('text');
  taskNameInput.value = taskInput.value;
  taskNameInput.readOnly = true;

  // Append input to content div
  contentDiv.appendChild(taskNameInput);

  // Create actions div
  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');

  // Create edit button
  const editButton = document.createElement('button');
  editButton.classList.add('edit');
  editButton.textContent = 'Edit';
  // Add event listener to edit button
  editButton.addEventListener('click', function() {
    taskNameInput.readOnly = !taskNameInput.readOnly;
    editButton.textContent = taskNameInput.readOnly ? 'Edit' : 'Save';
  });

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.textContent = 'Delete';
  // Add event listener to delete button
  deleteButton.addEventListener('click', function() {
    taskListContainer.removeChild(taskItem);
  });

  // Append buttons to actions div
  actionsDiv.appendChild(editButton);
  actionsDiv.appendChild(deleteButton);

  // Append content and actions divs to task item
  taskItem.appendChild(contentDiv);
  taskItem.appendChild(actionsDiv);

  // Append task item to the task list container
  taskListContainer.appendChild(taskItem);

  // Clear input values
  taskInput.value = '';
  deadlineInput.value = '';
  priorityInput.value = 'high';
  labelInput.value = '';
}

// Add event listener to the new task form
const newTaskForm = document.getElementById('new-task-form');
newTaskForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  addTask();
});
