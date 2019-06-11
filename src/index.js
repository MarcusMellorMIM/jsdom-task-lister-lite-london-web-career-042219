document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let myTasks = [];

document.getElementById("submit").addEventListener("click", addTask ) // Add a task when create tassk btn clicked

function addTask( event )  {
  event.preventDefault();

  let textInput = document.getElementById("new-task-description").value;
  let radioInput = document.querySelector('input[type=radio]:checked'); // get the colour

  /* Create the list element, and add the task as a child to that */
  let node = document.createElement("LI");
  let textnode = document.createTextNode(textInput);
  let btnnode = document.createElement("button");
    btnnode.innerHTML = 'X';
    btnnode.setAttribute("data-description", textInput);

    if (radioInput) {
     node.style.color=radioInput.value;
    }

    node.appendChild(textnode)
    node.appendChild(btnnode);

    btnnode.addEventListener("click", function(event) {
      /* Grab the parent LI for this button pressed, then remove it */
/*      console.log(this.parentNode); */
      event.target.parentNode.remove();
    });

    myTasks.push(btnnode); // Did this so I could reorder the li items .... but am moving on for the mo

/* Now assign this new li element, to the current tasks list elements */
  document.getElementById("tasks").appendChild(node);
};

function orderElements() {
    
    let taskList = Array.from( document.querySelectorAll("li"))
    taskList.sort( function (a, b) { return a.innerText.localeCompare(b.innerText)});
    
   taskList.forEach ( function(element ) {
//      document.getElementById("tasks").appendChild(node);
  document.getElementById("tasks").appendChild(element);
} )
// For the sort to work, the return bit needs to return -1,0 or 1
// in this case the localeCompare does this for me
// alternatively ... I could have had some if statmenents.
// NEXT STEP WOULD BE TO RE-ASSIGN THE PARENT/CHILD ATTRIBUTES OF EACH ONE.
// LATER BABY, LATER ...
}
