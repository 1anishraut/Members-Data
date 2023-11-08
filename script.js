// const inputBox1 = document.getElementById('input-box1');
// const inputBox2 = document.getElementById('input-box2');
// const inputBox3 = document.getElementById('input-box3');

// const listContainer = document.getElementById('container');



// function addTask(){
//     if(inputBox1.value === ''){
//         alert('Please fill the box');
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML =  '<div>
//         <strong>${inputBox1}</strong> (Priority: ${inputBox2}) </div>';
//         listContainer.appendChild(li);
//     }
// }// <button class="delete-button" onclick="deleteTask(this)">Delete </button>


function addTask() {
    var input1 = document.getElementById("input-box1");
    var input2 = document.getElementById("input-box2");
    var input3 = document.getElementById("input-box3");
    var fName = input1.value.trim();
    var contact = input2.value.trim();
    var emailId = input3.value.trim();
    const contactRegex = /^\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (fName === "" || contact === "" || emailId===" ") {
        alert("Please fill the data");
        return;
    }
    else if (!contact.match(contactRegex)){
        alert("Phone number is not valid");
    }
    else if (!emailId.match(emailRegex)) {
        alert("You have entered an invalid email address!");
    }

    else{
    var taskList = document.getElementById("taskList");
    var listItem = document.createElement("li");
    listItem.innerHTML = `<p class="p1">${fName}</p> <p class="p2"> ${contact}</p> <p class="p3"> ${emailId}</p>

    <button class="delete-button" onclick="deleteTask(this)"> \u00d7 </button>`;
    taskList.appendChild(listItem);
    }
    //after appending data in ul parent element data will be deleted
    input1.value = "";
    input2.value = "";
    input3.value = ""; 
    saveData();
}

 function deleteTask(button) {
     var listItem = button.parentElement;
     listItem.remove();
     saveData();
 }
function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function displayData(){
    taskList.innerHTML = localStorage.getItem("data");
}
displayData();
