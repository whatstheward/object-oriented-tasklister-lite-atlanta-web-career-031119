class TaskList {
    constructor(taskList = []){
        this.taskList = taskList
    }

    renderView=() =>{
        let list =  document.querySelector('#list')
        let ul = list.getElementsByTagName('ul')
        let items = document.getElementsByClassName('task-line')
        while (items[0])
        items[0].parentNode.removeChild(items[0])
        this.taskList.forEach(task => 
            task.getTaskListItemView()
            )
    }
}
