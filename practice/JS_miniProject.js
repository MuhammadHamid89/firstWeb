const input=document.getElementById('taskinput')
const addBtn=document.getElementById('addBtn')
//get ul where task will appear
const tasklist=document.getElementById('tasklist')

//load and saved task
//if task exist in local storage
//convert them back into a array
//otherwise create empty array

let task=JSON.parse(localStorage.getItem('task')) || []
console.log(task)

//display existing tasks
rendertask() // render function task yaha call hova hain

//button click event
//when add button click
//call addtask() function
addBtn.addEventListener('click',addtask)  //function addtask call yaha hova hain

//add new task
function addtask(){
    //read what user type
    const taxtTask=input.value.trim()

    //prevent empty task
    if(taxtTask === ''){
        alert('please enter a task')
        return;
    }

    //create a task object
    const tasks={
        //task name
        text:taxtTask,

        //initially task is not complete
        completed:false,
    }

    //add object into array
    task.push(tasks)

    //clear input box
    input.value='';

    saveTask();
    rendertask()

}

//save tasks
function rendertask(){
    //remove previous list
    tasklist.innerHTML=''

    //loop through every task
    task.forEach(function(taskitem,index){
        // create li
        const li=document.createElement('li')

        //create span for task text
        const taxtTask=document.createElement('span')

        //show task name
        taxtTask.textContent=taskitem.text

        //if completed
        //add completed class
        if(taskitem.completed){
            taxtTask.classList.add('completed')
        }

        //create div for button
        const buttonsDiv=document.createElement('div')

        //done button
        const doneBtn=document.createElement('button')
        doneBtn.textContent='done'

        //when done button click 
        doneBtn.addEventListener('click',function(){
            //toggled complete value
            task[index].completed=!task[index.completed]
            saveTask()

            //refresh screen
            rendertask()
        })
    

    //delete button
    const deleteBtn=document.createElement('button')
    deleteBtn.textContent='Delete'
    deleteBtn.addEventListener('click',function(){

        //remove one item
        task.splice(index,1)

        saveTask()
        rendertask()
    })

    //add button into div
    buttonsDiv.appendChild(doneBtn)
    buttonsDiv.appendChild(deleteBtn)

    // add text into li
    li.appendChild(taxtTask)

    //add button into li
    li.appendChild(buttonsDiv)

    //finally add li into ul
    tasklist.appendChild(li)
    })
}

function saveTask(){
    //convert array into json string
    const data=JSON.stringify(task)

    //save inside browser
    localStorage.setItem('task',data)
}





//asan lafzo my biyan oper wala code
// Select input field element from HTML by its id 'taskinput'
// const input=document.getElementById('taskinput')

// // Select add button element from HTML by its id 'addBtn'
// const addBtn=document.getElementById('addBtn')

// // Get ul element where task list items will appear
// const tasklist=document.getElementById('tasklist')

// // Load saved tasks from localStorage
// // If tasks exist in local storage, parse them back into an array
// // Otherwise, initialize an empty array []
// let task=JSON.parse(localStorage.getItem('task')) || []

// // Print the current task array to the browser console for debugging
// console.log(task)

// // Call function to display existing tasks when the page loads
// rendertask() 

// // Add a click event listener to the add button
// // When the add button is clicked, call the addtask() function
// addBtn.addEventListener('click',addtask) 

// // Define function to handle adding a new task
// function addtask(){
//     // Read the text typed by the user and remove extra white spaces using trim()
//     const taxtTask=input.value.trim()

//     // Prevent adding empty tasks by checking if the input is blank
//     if(taxtTask === ''){
//         // Show an alert message if the input field is empty
//         alert('please enter a task')
//         // Exit the function execution early
//         return;
//     }

//     // Create a new task object containing text and completion status
//     const tasks={
//         // Store task name/text
//         text:taxtTask,

//         // Set initial completion status to false
//         completed:false,
//     }

//     // Push the newly created task object into the main task array
//     task.push(tasks)

//     // Clear the input box value after adding the task
//     input.value='';

//     // Call saveTask function to update data in localStorage
//     saveTask();

//     // Call rendertask function to refresh and display the updated list on screen
//     rendertask()
// }

// // Define function to render/display all tasks on the screen
// function rendertask(){
//     // Clear the previous innerHTML of the ul element to prevent duplicate lists
//     tasklist.innerHTML=''

//     // Loop through every item in the task array along with its index
//     task.forEach(function(taskitem,index){
//         // Create a new 'li' list item element
//         const li=document.createElement('li')

//         // Create a 'span' element to hold the task text
//         const taxtTask=document.createElement('span')

//         // Assign the task text from the array object to the span textContent
//         taxtTask.textContent=taskitem.text

//         // Check if the task's completed property is true
//         if(taskitem.completed){
//             // Add 'completed' CSS class to the span element for line-through styling
//             taxtTask.classList.add('completed')
//         }

//         // Create a 'div' element to hold action buttons (done and delete)
//         const buttonsDiv=document.createElement('div')

//         // Create a 'button' element for marking the task as done
//         const doneBtn=document.createElement('button')

//         // Set the text content of the done button to 'done'
//         doneBtn.textContent='done'

//         // Add a click event listener to the done button
//         doneBtn.addEventListener('click',function(){
//             // Toggle the completion status (true/false) of the task at this specific index
//             task[index].completed=!task[index].completed

//             // Call saveTask function to save the updated state
//             saveTask()

//             // Call rendertask function to refresh the screen and show updated styling
//             rendertask()
//         })
    
//         // Create a 'button' element for deleting the task
//         const deleteBtn=document.createElement('button')

//         // Set the text content of the delete button to 'Delete'
//         deleteBtn.textContent='Delete'

//         // Add a click event listener to the delete button
//         deleteBtn.addEventListener('click',function(){
//             // Remove one item from the task array starting at the current index using splice
//             task.splice(index,1)

//             // Call saveTask function to update localStorage after deletion
//             saveTask()

//             // Call rendertask function to refresh the screen list display
//             rendertask()
//         })

//         // Append the done button into the buttons container div
//         buttonsDiv.appendChild(doneBtn)

//         // Append the delete button into the buttons container div
//         buttonsDiv.appendChild(deleteBtn)

//         // Append the text span element into the list item (li)
//         li.appendChild(taxtTask)

//         // Append the buttons container div into the list item (li)
//         li.appendChild(buttonsDiv)

//         // Finally, append the completed list item (li) into the ul tasklist container
//         tasklist.appendChild(li)
//     })
// }

// // Define function to save tasks data into browser storage
// function saveTask(){
//     // Convert the JavaScript task array into a JSON string format
//     const data=JSON.stringify(task)

//     // Save the JSON string inside the browser's localStorage under the key 'task'
//     localStorage.setItem('task',data)
// }