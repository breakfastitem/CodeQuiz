/**
 * link vars to existing html elements in DOM
 */

var contentBox = document.getElementById("dynamic-content");

var timer = document.getElementById("timer");
/**
 * Global vars
 */
var score =0;

var timerCount=75;

//will be interval of timer
var interval;

/**
* dynamic box content in grouped objects
*/

var startContent = {
    //properties hold html nodes
    container : window.document.createElement("div"),

    header: window.document.createElement("h2"),

    instructions: window.document.createElement("p"),

    button: window.document.createElement("button"),

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
        this.score.textContent = "ERROR ERROR ERROR";
        this.header.textContent = "All Done!";
        this.initialsInstructions.textContent ="Enter Initials:";

        this.container.appendChild(this.header);
        this.container.appendChild(this.score);
        this.container.appendChild(this.initialsForm);
        
        this.initialsForm.appendChild(this.initialsInstructions);
        this.initialsForm.appendChild(this.initialsInput);
        this.initialsForm.appendChild(this.initialsButton);
        

    },
    updateContent: function(){
        this.score.textContent ="Final Score: "+score;
    },

    displayContent : function(){
        this.updateContent();
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

    correctAnswerIndexes : [0,1],

    questions: ["What is the valid operator for declaring a variable in java script?"," At the top level in a script element, What is the name of object the key word (this) references?"],

    answers: [["var","int","string","variable"],["document","window","depends on the script name","main"]],
    
    questionIndex: 0,


    //initializes content according to questions index
    initializeContent : function () {

        this.questionText.textContent = this.questions[this.questionIndex];

        //initialize button list
        for(var i= 0;i<4;i++){

            this.answerListItems[i]=window.document.createElement("li");
            this.answerListButtons[i]= window.document.createElement("button");

            this.answerListButtons[i].setAttribute("id","answer-"+i);

            this.answerListButtons[i].textContent=(i+1)+": "+this.answers[this.questionIndex][i];

            this.answerList.appendChild(this.answerListItems[i]);
            this.answerListItems[i].appendChild(this.answerListButtons[i]);
        }
    

        this.container.appendChild(this.questionText);
        this.container.appendChild(this.answerList);
        

    },

    updateContent: function(){
        this.questionText.textContent = this.questions[this.questionIndex];

        for(var i=0;i<4;i++){
            this.answerListButtons[i].textContent=(i+1)+": "+this.answers[this.questionIndex][i];
        }

    },

    loadNextQuestion: function(){
        if(this.questionIndex != this.questions.length-1){
            this.questionIndex++;
            this.updateContent();
        }else{
            endQuiz();
        }

    },


    //displays initialized content
    displayContent : function(){
        contentBox.appendChild(this.container);
    }


}

/**
 * global functions
 */

function clearDynamicBox(){
    while(contentBox.firstChild!=null){
        contentBox.removeChild(contentBox.firstChild);
    }
    
}

//starts quiz and timer
function startQuiz() {
    console.log("Start The quiz");
    startTimer();
    clearDynamicBox();
    questionContent.displayContent();
}

//Starts timer when timer reaches zero quiz is ended
function startTimer(){

    timer.textContent="Time: "+ timerCount;

    interval = setInterval(()=>{
        timerCount--;
        timer.textContent="Time: "+ timerCount;

        if(timerCount === 0){
            endQuiz();
            endTimer();    
        }

    },1000);
}
function endTimer(){
    clearInterval(interval);
    timer.textContent="";
}

function endQuiz(){
    console.log("The quiz has ended");

    endTimer();
    
    score+=timerCount;

    clearDynamicBox();
    endContent.displayContent();
}

//Determines weather a question is correct or not and loads next question
function processAnswer(event){
    if(event.target.id!=""){
        
        selectedIndex = event.target.id.split("-")[1];

        //TODO:: Add ui indication of result
        if(Number(selectedIndex)===questionContent.correctAnswerIndexes[questionContent.questionIndex]){
            console.log("correct");
            score ++;
        }else{
            timerCount-=10;
            timer.textContent="Time: "+timerCount;
            console.log("wrong");
        }
        
        questionContent.loadNextQuestion();
    }

}

endContent.initializeContent();
startContent.initializeContent();
questionContent.initializeContent();

startContent.button.addEventListener("click",startQuiz);

questionContent.answerList.addEventListener("click",processAnswer);

startContent.displayContent();

