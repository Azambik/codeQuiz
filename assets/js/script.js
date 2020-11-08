//global variables
var clickZoneEl = document.querySelector("#qna");
var startEl = document.querySelector(".answer1");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector(".question");
var Answer1El = document.querySelector(".answer1");
var Answer2El = document.querySelector(".answer2");
var Answer3El = document.querySelector(".answer3");
var Answer4El = document.querySelector(".answer4");
var highScoreEl = document.querySelector(".high-score-list");
//var
var gameStarted = false;
var timeS = 300;
var questionNumber = 0;
var selectedEl = "";
var chosenAnswer = "";
var score =0;

// array for questions and answers
var questionAndAnswers = [
    {
        quesion: "What is another of Pennywises names?",
        answer: "Robert Grey",
        option1: "Robert Grey",
        option2: "Ben Hanscom",
        option3: "Henry Bowers",
        option4: "Mr. Keene"
    },
    {
        quesion: "What town does IT take place in?",
        answer: "Derry, Main",
        option1: "Waco, Texas",
        option2: "Derry, Main",
        option3: "Salem , Massachusetts",
        option4: "Amityville, New York",   
    },
    {
        quesion: "Who wrote the anonymous poem for Beverly Marsh",
        answer: "Ben Hanscom",
        option1: "Georgie Denbrough",
        option2: "Ben Hanscom",
        option3: "Bill Denbrough",
        option4: "Patrick Hockstetter",   
    },
    {
        quesion: "what is the ritual to banish Pennywise called?",
        answer: "Ritual of Chud",
        option1: "Ritual of banishing",
        option2: "Ritual of blood",
        option3: "Lesser ritual of the pentagram",
        option4: "Ritual of Chud",   
    },
    {
        quesion: "What is weapon does the losers club use to hurt Pennywise as kids?",
        answer: "Slingshot with silver slugs",
        option1: "Love",
        option2: "Slingshot with silver slugs",
        option3: "Fire",
        option4: "Wooden stake",   
    },
    {
        quesion: "who played the original 1990 movie Pennywise?",
        answer: "Tim Curry",
        option1: "Bill Skarsgard",
        option2: "Tim Curry",
        option3: "Michael Keaton",
        option4: "Robert Englund",   
    },
    {
        quesion: "who played the original 2017-2019 movies Pennywise?",
        answer: "Bill Skarsgard",
        option1: "Alan Rickman",
        option2: "Tim Curry",
        option3: "Bill Skarsgard",
        option4: "Robert Englund",   
    },
    {
        quesion: "What is Pennywises universal opposite?",
        answer: "The Turtle",
        option1: "The Turtle",
        option2: "The Frog",
        option3: "The Dog",
        option4: "The Sun",   
    },
    {
        quesion: "What is the stronges power of the loosers club?",
        answer: "Friendship",
        option1: "Love",
        option2: "Anger",
        option3: "Family",
        option4: "Friendship",   
    },
    {
        quesion: "About how many years does Pennywise sleep for?",
        answer: "27 years",
        option1: "57 years",
        option2: "3 years",
        option3: "27 years",
        option4: "18 years",   
    },
];
var startGame = function(){
    //start timer function
    setInterval(()=>{
        timeS -= 1;
        timerEl.innerHTML = timeS;

    },1000)
    

}

//functions
var clickHandler = function(event) {
    var targetEl = event.target
    selectedEl = event.target.innerHTML
    
    console.log(event.target);
    if (gameStarted === false){
        //console.log(questionAndAnswers[0].quesion);
        gameStarted = true;
        startGame();
        questionUpdate();
        console.log(selectedEl);
    }
    else{
        
        validateAnswer();
        if (questionNumber ===10){
            //debugger;
           endGame();
           //end game function
        }
    }
};
//update questions
var questionUpdate = function(){
    if (questionNumber < questionAndAnswers.length){
        questionEl.innerHTML = questionAndAnswers[questionNumber].quesion;
        Answer1El.innerHTML = questionAndAnswers[questionNumber].option1;
        Answer2El.innerHTML = questionAndAnswers[questionNumber].option2;
        Answer3El.innerHTML = questionAndAnswers[questionNumber].option3;
        Answer4El.innerHTML = questionAndAnswers[questionNumber].option4;        
    }
};
var validateAnswer = function(){
    if (questionNumber === 9){
        questionEl.innerHTML = ("Your score is " + score);
        gameStarted = false;
    
    }
    console.log("selectedEl:" + selectedEl +"answer:" + questionAndAnswers[questionNumber].answer );
    if (questionAndAnswers[questionNumber].answer === selectedEl){
        console.log("correct")
        questionNumber++;
        questionUpdate();
        score++;
        
    }
    else{
        console.log("Wrong")
        questionNumber++;
        timeS -= 10;
        questionUpdate();
    }
};

var endGame = function(){
    var nameToSave = prompt("enter your initials for high score");
    console.log(nameToSave);
    var listItemEl = document.createElement("li");
    listItemEl.className = "player-score";
    listItemEl.innerHTML = "Name: "+ nameToSave + " score: " + score + " time left: " + timeS;
    highScoreEl.appendChild(listItemEl);
};

//Event listeners
clickZoneEl.addEventListener("click",clickHandler);