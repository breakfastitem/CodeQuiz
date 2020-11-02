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

//Object that holds local storage data
var scoresData = {
    length:0,
    scores: [],
    initials: []
};

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

    correctAnswerIndexes : [0,1,3,1,2,2],

    questions: ["What is the valid operator for declaring a variable in java script?"," In the broadest scope of a html script element, what is the name of object the key word (this) references? (DOM)","Variables passed into a function call are referred to as ____.","Which of the following is an example of camel case.","What is the length of the array returned by \"hello - world\".split(\" \") .","In javascript, which of the follwing is not a valid way to create an array containing the value 4."],

    answers: [["var","int","string","variable"],["document","window","null","main"],["parameters","objects","booleans","arguments"],["camel-case","camelCase","Camelcase","CamelCase"],["1","2","3","4"],["var four =[4];","var four =[4,];","var four = new Array(4)","var four = new Array('4')"]],
    
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


};

var confirmContent = {
    confirmBox: window.document.getElementById("dynamic-confirmation"),
    container: window.document.createElement("div"),
    line : window.document.createElement("hr"),
    header: window.document.createElement("h3"),
    //In milliseconds
    timerLength:1000,

    initializeContent : function () {
        this.header.textContent ="ERROR ERROR ERROR";


        this.container.appendChild(this.line);
        this.container.appendChild(this.header);

       

    },

    displayContentOnTimer : function (isCorrect) {

        if(isCorrect){
            this.header.textContent="Correct!";
        }else{
            this.header.textContent="Wrong!";
        }

        this.confirmBox.appendChild(this.container);

        var timerTimeout = setTimeout(()=>{
            this.clearConfirmBox();
        },this.timerLength);
        
    },

    clearConfirmBox : function (){
        while(this.confirmBox.firstChild!=null){
            this.confirmBox.removeChild(this.confirmBox.firstChild);
        }
    }

};

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
    timerCount=75;
    score=0;

    console.log("Start The quiz");
    startTimer();
    clearDynamicBox();
    questionContent.displayContent();
}

function endQuiz(){
    console.log("The quiz has ended");

    endTimer();

    score*=timerCount+1;

    clearDynamicBox();
    endContent.displayContent();
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

//Determines weather a question is correct or not and loads next question calls coonfirm display
function processAnswer(event){
    if(event.target.id!=""){
        
        selectedIndex = event.target.id.split("-")[1];

        
        if(Number(selectedIndex)===questionContent.correctAnswerIndexes[questionContent.questionIndex]){
            score ++;
            confirmContent.displayContentOnTimer(true);
        }else{
            timerCount-=10;
            timer.textContent="Time: "+timerCount;
            confirmContent.displayContentOnTimer(false);
        }
        
        questionContent.loadNextQuestion();
    }

}

//Handles submition of initials
//saves to local storage navigates to high score page
function setHighScore(event){

    event.preventDefault();

    scoresDataTemp= JSON.parse(localStorage.getItem("scores"));

    if(scoresDataTemp!=null){
        scoresData=scoresDataTemp;
    } 

    var initials= endContent.initialsInput.value;
    
    if(initials!=null && initials.length<4){
        scoresData.initials.push(initials);
        scoresData.scores.push(score);
        scoresData.length++;

        localStorage.setItem("scores",JSON.stringify(scoresData));
        

    }else{
        //indicate in confirm ui
        console.log("Bad Input");
    }

    window.location.href="./src/html/scores.html";

}

endContent.initializeContent();
startContent.initializeContent();
questionContent.initializeContent();
confirmContent.initializeContent();

startContent.button.addEventListener("click",startQuiz);

questionContent.answerList.addEventListener("click",processAnswer);

endContent.initialsButton.addEventListener("click", setHighScore);

startContent.displayContent();