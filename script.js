/**
 * Declare objects in base html
 */
console.log(window);
var contentBox = document.getElementById("dynamic-content");

var timer = document.getElementById("timer");

/**
* Create Initial content in grouped object
*/

var startContent = {
    //properties hold html nodes
    startHeader: window.document.createElement("h2"),

    startInstructions: window.document.createElement("p"),

    startButton: window.document.createElement("button"),

    /**
   * Initialize object content and place content on dom
       */

    initializeStartBox: function () {

        //startButton.setAttribute("class","btn");


        this.startButton.textContent = "Start";
        this.startInstructions.textContent = "Try to answer the following questions within the time limit.";
        this.startHeader.textContent = "Coding Quiz Challenge";

        contentBox.appendChild(this.startHeader);
        contentBox.appendChild(this.startInstructions);
        contentBox.appendChild(this.startButton);

    }



};


startContent.initializeStartBox();

//startButton.addEventListener("click",startQuiz)



/**
 * Starts Timer and question mode
 */
function startQuiz() {

}



