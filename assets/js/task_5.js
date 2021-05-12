data = [];

function getTask() {
    var userTask = document.getElementById("inputName");
    var task = document.getElementById("inputTask");

    if (userTask.value == "" || task.value == "") {
        alert("plz put data in user And task")
    } else {

        obj = { user: userTask.value, task: task.value };
        data.push(obj);
        // data = data.reverse()
        showData();
    }
}

function showData() {
    var liContent = "";
    for (var i = 0, len = data.length; i < len; i++) {
        // console.log(data[i].user, data[i].task);
        liContent += `
        <li class="row">
        <div class="content">
            <input type="checkbox" onclick="taskComplete(${this})">
            <span id="user">${data[i].user}</span>
            </div>
            <div>
            <span id="task">${data[i].task}</span>
        </div>
        <div class="icon">
            <i class="delete-icon fa fa-trash" onclick="removeTask(${i})"></i>
            <i class="update-icon fa fa-edit" onclick="getTaskValue(${i})"></i>
        </div>
    </li>   
        `
        document.getElementById("li_task").innerHTML = liContent;
        document.getElementById("inputName").value = "";
        document.getElementById("inputTask").value = "";
    }
}

function removeTask(index) {
    // alert(index);
    // data.splice(index, 1);
    if (data.length == 1) {
        document.getElementById("li_task").innerHTML = "";
        data = [];

    } else {

        var dataDel = data.splice(index, 1);
        console.log(dataDel);
        console.log(data.length);
        showData();
    }
}

function getTaskValue(index) {
    var inputUpdate = `
        <div class="form row">
            <input type="text" class="inputName" id="updateInputName" value="${data[index].user}">
            <input type="text" class="inputTask" id="updateInputTask" value="${data[index].task}">
            <button type="submit" onclick="updateTask(${index}); return false;"><i class="fas fa-user-edit"></i></button>
        </div>
    `

    document.getElementById("update").innerHTML = inputUpdate;
    // document.getElementById("btnUpdate").addEventListener("click", updateTask(index, event), false);

}

function updateTask(index) {

    var updateName = document.getElementById("updateInputName").value;
    var updateTask = document.getElementById("updateInputTask").value;

    data[index].user = updateName;
    data[index].task = updateTask;
    document.getElementById("update").innerHTML = "";

    showData();
}

// function taskComplete(event) {
//     event.nextElementSibling.classList.toggle("complete");
// }