var backButton = this.document.getElementById("back-btn");
var clearButton = this.document.getElementById("clear-btn");

var scoresData= {
    scores:[],
    initials:[]
};

backButton.addEventListener("click",()=>{
    window.location.href="../../index.html";
});

clearButton.addEventListener("click", ()=>{

    scoresData.scores=[];
    scoresData.initials=[];

    localStorage.setItem("scores" , JSON.stringify(scoresData));
    
});
