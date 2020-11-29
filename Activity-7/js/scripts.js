// task array
var tasks=[];

// task status 'enum'
var taskStatus = {
    active: 'active',
    completed: 'completed'
};

// task constructor function
function Task (id, name, status){
    this.id = id;
    this.name = name;
    this.status = status;
}

// create new task element and add it to the DOM
function addTaskElement (task) {
    // Create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set attribute
    taskEl.setAttribute('id', task.id);

    //add text to task element 
    taskEl.appendChild(textEl);
    
    //add task element to the list
    listEl.appendChild(taskEl);
}

// Click handler to add a new task
function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value !== ''){
        //create a unique id
        var id = 'item-' + tasks.length;

        //create anew task using the constructure function
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task); // saving it to our database

        //add task to the page //DOM
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

//click handler to complete a task
function completeTask (event) {
    //Get the task element
    var taskEl = event.target;
    var id = taskEl.id;

    //find corresponding  task in tasks array and update status
    //-let- is like var in this case, a way to declare a variable
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id == id){
            task.status = taskStatus.completed;
            break;
        }
        
    }

    //Move task element from active list and add to completed list
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

//Key press handler to automatically click the add task button
function clickButton (event){
    if (event.keyCode ===13){
        document.getElementById('add-task').click();
    }
}

//initiallize the app
function init (){
    //Wire up the add task button click handler
    document.getElementById('add-task').onclick = addTask;

    //wire up the task completed list item click handler
    document.getElementById('active-list').onclick = completeTask;

    //wire up the task input key press handler
    document.getElementById('input-task').onkeypress = clickButton;

}

init();
