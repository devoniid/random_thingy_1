const questions = [
    {
        question: "Which regions are included in the world map from 1570 but are not shown on the world map from 1467?",
        optionA: "Southern Africa and the Americas",
        optionB: "North Africa and the Middle East",
        correctOption: "optionA"
    },

    {
        question: "The Compas Rose has 4 directions: Up, Down, Right, Left",
        optionA: "False",
        optionB: "True",
        correctOption: "optionA"
    },

    {
        question: "What is a primary source?",
        optionA: "A record of an event created late by people not at the event",
        optionB: "A description of an event from someone who witnessed or lived through that event",
        correctOption: "optionB"
    },

    {
        question: "When did Christopher Columbus arrive in the Americas",
        optionA: "1467",
        optionB: "1492",
        correctOption: "optionB"
    },

    {
        question: "Latitude and Longitude are a way of viewing/measuring the map",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "Drought, Natural disasters, lack of basic needs(water,food, shelter), unemployment,and war are-",
        optionA: "Push factors",
        optionB: "Pull factors",
        correctOption: "optionA"
    },

    {
        question: "There are 9 continents",
        optionA: "True",
        optionB: "False",
        correctOption: "optionB"
    },

    {
        question: "Christopher Columbus went exploring to find-",
        optionA: "Gold, Spices, and land to increase the power of the king and queen",
        optionB: "To find new plants, animals, and make new friends to learn how to better farm",
        correctOption: "optionA"
    },

    {
        question: "South Asia has many different cultures and religions, including Buddhism, Hinduism, and Jainism.",
        optionA: "False",
        optionB: "True",
        correctOption: "optionB"
    },

    {
        question: "What is a secondary source?",
        optionA: "A description of an event from someone who witnessed or lived through that event",
        optionB: "A record of an event created late by people not at the event",
        correctOption: "optionB"
    },

    {
        question: "A map has the elements of a-",
        optionA: "Title, key, subtitle, and compass rose",
        optionB: "Title, axis, compass, and population",
        correctOption: "optionA"
    },

    {
        question: "A map that shows lines that refer to the surface features of land is a...",
        optionA: "Topographic map",
        optionB: "World map",
        correctOption: "optionA"
    },


    {
        question: "One of the 7 landmasses above water on the Earth is ",
        optionA: "Country",
        optionB: "Continent",
        correctOption: "optionB"
    },

    {
        question: "The process of cutting and clearing away trees from a forest is known as",
        optionA: "Deforestation",
        optionB: "Desertification",
        correctOption: "optionA"
    },

    {
        question: "Which continent includes the United States?",
        optionA: "North America",
        optionB: "South America",
        correctOption: "optionA"
    },

    {
        question: "People can effect the environment in which they live. What is an correct example of an negative effect we might have?",
        optionA: "Planting flowers and feeding wildlife",
        optionB: "Cutting down trees and capturing wildlife",
        correctOption: "optionB"
    },

    {
        question: "Australia is a continent, and also a country",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "Are lines on a map that run in the east-west direction lines of latitude or longitude?",
        optionA: "Latitude",
        optionB: "Longitude ",
        correctOption: "optionA"
    },

    {
        question: "What is the top layer of a rainforest called?",
        optionA: "Emergent layer",
        optionB: "Apolline layer",
        correctOption: "optionA"
    },

    {
        question: "What is the name for a territory under the complete control of a distant country?",
        optionA: "Colony",
        optionB: "City",
        correctOption: "optionA"
    },

    {
        question: "Maps often have a ______ to show the orientation of the 4 directions",
        optionA: "Astrolabe",
        optionB: "Compass rose",
        correctOption: "optionB"
    },

    {
        question: "What problem isn't caused by urbanization?",
        optionA: "Economic instability",
        optionB: "Deforestation",
        correctOption: "optionA"
    },

    {
        question: "What are the 7 continents?",
        optionA: "Australia, america, mexico, russia, england, canada, china",
        optionB: "Australia, North America, South America, Antarctica, Asia, Africa, Europe",
        correctOption: "optionB"
    },

    {
        question: "Do mountains affect the way people colonize?",
        optionA: "No",
        optionB: "Yes",
        correctOption: "optionB"
    },

    {
        question: "What kind of hats did pilgrims wear?",
        optionA: "Black bucket hats",
        optionB: "Baseball caps",
        correctOption: "optionA"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() {
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //gets corrects radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    window.location.href = "/"
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"

}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"

}