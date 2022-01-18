fetch("tasks.json")
    .then(response => response.json())
    .then(data => {
        for(task in data.tasks){
            document.querySelector('#tasks').innerHTML
            += `
                <div class="task">
                    <span id="taskname">
                        ${data.tasks[task]}
                    </span>
                    <button class="delete-task">Delete</button>
                </div>
            `; 
        }
    })

document.getElementById('add-task-btn').onclick = function(){
    if(document.querySelector('#new-task input').value.length == 0){
        alert('Please enter new task');
    }
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#new-task input').value}
                </span>
                <button class="delete-task">Delete</button>
            </div>
        `;
    }
}