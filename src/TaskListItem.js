class TaskListItem {
    constructor(taskName) {
        this.taskName = taskName
         
    }

    getTaskListItemView(){

        let list = document.querySelector('#list')
        
        let ul = document.createElement('ul')
        ul.className = "unordered-list"

        let div = document.createElement('div')
        div.className = "task-line"
        ul.appendChild(div)

        let li = document.createElement('li')
        li.innerText = this.taskName
        div.appendChild(li)

        let delBtn = document.createElement('button')
        delBtn.className = "delete-button"
        delBtn.innerText = "X"
        div.appendChild(delBtn)
        delBtn.addEventListener('click', function(e){
            e.target.parentElement.remove()
        })
        

        let priority = document.createElement('select')
        priority.className = 'priority '
        priority.innerHTML =    "<option >Choose Priority</option>" +
                                "<option value='high-priority'>High Priority</option>" +
                                "<option value= 'med-priority'>Medium Priority</option>" +
                                "<option value= 'low-priority'>Low Priority</option>"
        priority.addEventListener('change', function(e){e.target.parentElement.className = e.target.value})
        div.appendChild(priority)

        list.appendChild(ul)

        return list
    }

}

