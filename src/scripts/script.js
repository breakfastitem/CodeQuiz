/**
 * link vars to html objects
 */

var contentBox = document.getElementById("dynamic-content");

var timer = document.getElementById("timer");

/**
* dynamic box content in grouped objects
*/

var startContent = {
    //properties hold html nodes
    header: window.document.createElement("h2"),

    instructions: window.document.createElement("p"),

    button: window.document.createElement("button"),

    /**
   * Initialize object content and place content on dom
       */

    initializeContent: function () {

        //startButton.setAttribute("class","btn");


        this.button.textContent = "Start";
        this.instructions.textContent = "Try to answer the following questions within the time limit.";
        this.header.textContent = "Coding Quiz Challenge";

        contentBox.appendChild(this.header);
        contentBox.appendChild(this.instructions);
        contentBox.appendChild(this.button);

    }

};

var endContent ={

    header: window.document.createElement("h2"),

    score: window.document.createElement("p"),

    initialsForm : window.document.createElement("form"),

    initialsButton : window.document.createElement("button"),

    initialsInstructions : window.document.createElement("span"),

    initialsInput : window.document.createElement("input"),

    initializeContent: function () {


        this.initialsButton.textContent = "Submit";
        this.score.textContent = "Final Score: TODO";
        this.header.textContent = "All Done!";
        this.initialsInstructions.textContent ="Enter Initials:";

        contentBox.appendChild(this.header);
        contentBox.appendChild(this.score);
        contentBox.appendChild(this.initialsForm);
        
        this.initialsForm.appendChild(this.initialsInstructions);
        this.initialsForm.appendChild(this.initialsInput);
        this.initialsForm.appendChild(this.initialsButton);
        

    }


};

/**
 * Starts Timer and question mode
 */
function startQuiz() {
    console.log("Start The quiz");
}


endContent.initializeContent();

startContent.button.addEventListener("click",startQuiz)





