var backButton = this.document.getElementById("back-btn");
var clearButton = this.document.getElementById("clear-btn");

var scoresData= {
    length:0,
    scores:[],
    initials:[]
};

var highScoreDisplay ={

    container : window.document.getElementById("dynamic-scores"),
    list: window.document.createElement("ol"),

    initializeList: function() {
        var scoresDataTemp = JSON.parse(localStorage.getItem("scores"));

        if(scoresDataTemp===null){

            localStorage.setItem("scores",JSON.stringify(scoresData));

        }else{
            
            scoresData=scoresDataTemp;
            for(var i=0;i<scoresData.length;i++){
                var scoreLI = window.document.createElement("li");
                scoreLI.textContent= scoresData.initials[i]+": "+scoresData.scores[i];

                this.list.appendChild(scoreLI);
                
            }
        }
    },

    displayList(){
        this.container.appendChild(this.list);
    }


};

backButton.addEventListener("click",()=>{
    window.location.href="../../index.html";
});

clearButton.addEventListener("click", ()=>{

    scoresData.scores=[];
    scoresData.initials=[];
    scoresData.length=0;

    localStorage.setItem("scores" , JSON.stringify(scoresData));
    
});

highScoreDisplay.initializeList();
highScoreDisplay.displayList();