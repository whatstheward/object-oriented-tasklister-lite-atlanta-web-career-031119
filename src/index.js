const taskList = new TaskList()
document.addEventListener("DOMContentLoaded", () => {
  taskList.renderView()
  // Add Form Behavior Here!
  const editButton = document.querySelector('.edit-button')

  
  let taskForm = document.querySelector('#create-task-form') 
  
  taskForm.addEventListener('submit', handleForm)
  
  function handleForm(e) {
    e.preventDefault()
    
    let task = e.target
    let item = task.querySelector('#new-task-description').value
    let newTask = new TaskListItem(item)
    taskList.taskList.push(newTask)
    taskList.renderView()
    e.target.reset()
  }   
  
  
  
});
