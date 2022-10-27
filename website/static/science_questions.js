const questions = [
    {
        question: "Something that takes up space and has mass",
        optionA: "Matter",
        optionB: "Density",
        correctOption: "optionA"
    },

    {
        question: "A state of matter that has a definite volume and shape.",
        optionA: "Solid",
        optionB: "Liquid",
        correctOption: "optionA"
    },

    {
        question: "When a solid turns into a liquid its called...",
        optionA: "Precipitation",
        optionB: "Melting",
        correctOption: "optionB"
    },

    {
        question: "The things that make up of all matter are called...?",
        optionA: "Particles",
        optionB: "Atoms",
        correctOption: "optionB"
    },

    {
        question: "Which state of matter's atoms are closer together and compacted?",
        optionA: "Solids",
        optionB: "Liquids",
        correctOption: "optionA"
    },

    {
        question: "What are the four major states of matter?",
        optionA: "Solid, Liquid, Gas, and Plasma",
        optionB: "Solid, Volume, Mass, and Gas",
        correctOption: "optionA"
    },

    {
        question: "Crushing a can and liquid pouring out is an example of a chemical change.,
        optionA: "True",
        optionB: "False",
        correctOption: "optionB"
    },

    {
        question: "The energy of matter in motion is called",
        optionA: "Kinetic",
        optionB: "Thermal",
        correctOption: "optionA"
    },

    {
        question: "The process of a gas turning into a liquid is called condensation",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "A salad is an example of",
        optionA: "A Mixture",
        optionB: "A Compound",
        correctOption: "optionA"
    },

    {
        question: "In which state are the particles LEAST able to move?",
        optionA: "Plasma
        optionB: "Solid",
        correctOption: "optionB"
    },

    {
        question: "When some liquids are heated to high temperatures _____ is produced through evaporation",
        optionA: "Gas",
        optionB: "Solid",
        correctOption: "optionA"
    },


    {
        question: "Mass is a property of matter",
        optionA: "False",
        optionB: "True",
        correctOption: "optionB"
    },

    {
        question: "What state of matter's particles are able to move around with lots of space",
        optionA: "Gas",
        optionB: "Solid",
        correctOption: "optionA"
    },

    {
        question: "Water can be a solid, liquid, and a gas.",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "The amount of space an object takes up is its",
        optionA: "Density",
        optionB: "Volume",
        correctOption: "optionB"
    },

    {
        question: "When water turns to a gas, its called evaporation",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "The earths first and thinnest layer is called..",
        optionA: "Crust",
        optionB: "Mantle",
        correctOption: "optionA"
    },

    {
        question: "The earths outer core is a liquid",
        optionA: "False",
        optionB: "True",
        correctOption: "optionB"
    },

    {
        question: "The core contains: Iron, Nickel and Sulfur",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "The earth is made up of layers",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "When an earthquake happens it's because...",
        optionA: "The earth is spinning too fast on its axis",
        optionB: "The earth's tectonic plates are rubbing against each other",
        correctOption: "optionB"
    },

    {
        question: "Mountains are formed when two or more tectonic plates collide and push up against each other",
        optionA: "False",
        optionB: "True",
        correctOption: "optionB"
    },

    {
        question: "Divergent plates mean when the tectonic plates...",
        optionA: "Move together and side to side",
        optionB: "Move apart from each other",
        correctOption: "optionB"
    },

    {
        question: "Rolling a marble is an example of....",
        optionA: "Kinetic energy",
        optionB: "Potential energy",
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
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

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