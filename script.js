/**
 * Declare objects in base html
 */

 var contentBox = document.getElementById("dynamic-content");

 var timer = document.getElementById("timer");

 initializeStartBox();


 function initializeStartBox(){
    /**
     * Create Initial content
     */

    var startHeader = document.createElement("h2");

    var startInstructions =document.createElement("p");

    var startButton =document.createElement("button");

    /**
     * Initialize object content and place content on dom
     */

    startButton.textContent="Start";
    startInstructions.textContent="Try to answer the following questions within the time limit.";
    startHeader.textContent="Coding Quiz Challenge";

    contentBox.appendChild(startHeader);
    contentBox.appendChild(startInstructions);
    contentBox.appendChild(startButton);

 }




