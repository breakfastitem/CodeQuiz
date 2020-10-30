/**
 * link vars to existing html elements in DOM
 */

var contentBox = document.getElementById("dynamic-content");

var timer = document.getElementById("timer");

/**
* dynamic box content in grouped objects
*/

var startContent = {
    //properties hold html nodes
    container : window.document.createElement("div"),

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

        this.container.appendChild(this.header);
        this.container.appendChild(this.instructions);
        this.container.appendChild(this.button);

    },

    displayContent :function () {
        contentBox.appendChild(this.container);
    }

};

var endContent ={

    container : window.document.createElement("div"),

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

        this.container.appendChild(this.header);
        this.container.appendChild(this.score);
        this.container.appendChild(this.initialsForm);
        
        this.initialsForm.appendChild(this.initialsInstructions);
        this.initialsForm.appendChild(this.initialsInput);
        this.initialsForm.appendChild(this.initialsButton);
        

    },

    displayContent : function(){
        contentBox.appendChild(this.container);
    }
    


};

var questionContent = {

    container : window.document.createElement("div"),

    questionText : window.document.createElement("p"),

    answerList : window.document.createElement("ul"),

    //unInitialized until initialize method is called
    answerListItems : [ , , , ] ,

    answerListButtons : [ , , , ] ,

    correctAnswerIndex : -1,

    
    initializeContent : function () {

        //TODO:: get from method and object
        this.questionText.textContent = "what is up?";
        correctAnswerIndex=2;

        //initialize button list
        for(var i= 0;i<4;i++){

            this.answerListItems[i]=window.document.createElement("li");
            this.answerListButtons[i]= window.document.createElement("button");

            this.answerListButtons[i].textContent="Answer "+i;

            this.answerList.appendChild(this.answerListItems[i]);
            this.answerListItems[i].appendChild(this.answerListButtons[i]);
        }
    

        this.container.appendChild(this.questionText);
        this.container.appendChild(this.answerList);
        

    },

    displayContent : function(){
        contentBox.appendChild(this.container);
    }


}

/**
 * Starts Timer and question mode
 */
function startQuiz() {
    console.log("Start The quiz");
}


endContent.initializeContent();
startContent.initializeContent();
questionContent.initializeContent();

startContent.button.addEventListener("click",startQuiz);

questionContent.displayContent();





