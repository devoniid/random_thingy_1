const questions = [
    {
        question: "Square root of 49",
        optionA: "7",
        optionB: "8",
        correctOption: "optionA"
    },

    {
        question: "What is the correct order of operations",
        optionA: "P.E.M.D.A.S",
        optionB: "E.M.P.A.S.D",
        correctOption: "optionA"
    },

    {
        question: "What is 40% of 50?",
        optionA: "25",
        optionB: "20",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is a list of integer numbers?",
        optionA: "[4.44, 2, -1.01, 2, 6, 74, 3.14159]",
        optionB: "[-43, 4, 6, -42, -24, 667]",
        correctOption: "optionB"
    },

    {
        question: "Which is a correct ordered pair?",
        optionA: "(x,y)",
        optionB: "(a,b)",
        correctOption: "optionA"
    },

    {
        question: "How many meters in a kilometer?",
        optionA: "100",
        optionB: "1000",
        correctOption: "optionB"
    },

    {
        question: "How many milliliters to liters?",
        optionA: "100",
        optionB: "1000",
        correctOption: "optionB"
    },

    {
        question: "What is the rounded version of 3.14159?",
        optionA: "3",
        optionB: "4",
        correctOption: "optionA"
    },

    {
        question: "Which of these numbers is an odd number ?",
        optionA: "20101290908",
        optionB: "20101290907",
        correctOption: "optionB"
    },

    {
        question: "Greater than or equal to symbols are graphed as...",
        optionA: "Solid line with a closed circle",
        optionB: "Dotted line with an open circle",
        correctOption: "optionA"
    },

    {
        question: "What is the best way to classify the number -29.9?",
        optionA: "Integer",
        optionB: "Rational Number",
        correctOption: "optionB"
    },

    {
        question: "What is the unit rate of a recipe with a ratio of 10 parts flour to 8 parts water?",
        optionA: "5:4",
        optionB: "4:5",
        correctOption: "optionA"
    },


    {
        question: "What is 6*7?",
        optionA: "38",
        optionB: "42",
        correctOption: "optionB"
    },

    {
        question: "If a school has $20,000 budget for a year's worth of food and field trips, and they spent $10,587.55 on food, how much of the budget is left for field trips?",
        optionA: "$9,412.45",
        optionB: "9,421.45",
        correctOption: "optionA"
    },

    {
        question: "Whats heavier?",
        optionA: "2001 lbs",
        optionB: "1 ton",
        correctOption: "optionA"
    },

    {
        question: "Which is an even number?",
        optionA: "29",
        optionB: "30",
        correctOption: "optionB"
    },

    {
        question: "Which is a prime number?",
        optionA: "37",
        optionB: "40",
        correctOption: "optionA"
    },

    {
        question: "What is product of 12 x 14",
        optionA: "168",
        optionB: "180",
        correctOption: "optionA"
    },

    {
        question: "What are 3 types of triangles?",
        optionA: "Obtuse, acute, and right triangles",
        optionB: "Right, left, and center triangles",
        correctOption: "optionA"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Seven",
        correctOption: "optionA"
    },

    {
        question: "What is the rounded sum of 357, [space] 220, and 500?",
        optionA: "1,077",
        optionB: "1,080",
        correctOption: "optionA"
    },

    {
        question: "Which is a composite number?",
        optionA: "144",
        optionB: "99",
        correctOption: "optionA"
    },

    {
        question: "What class of shapes have 4 sides and 4 vertices?",
        optionA: "Quadrilaterals",
        optionB: "Squares and Rectangles",
        correctOption: "optionA"
    },

    {
        question: "If George buys 4 pies [sliced in fourths] for a party, and each person gets 25% of a pie, how many people attending the party can have pie?",
        optionA: "32 persons",
        optionB: "16 people",
        correctOption: "optionB"
    },

    {
        question: "If someone's driving 1,000 miles at a steady speed of 60mph, how long will it take to get to their destination?",
        optionA: "16.66666666666667",
        optionB: "16.66666666666067",
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
    if (options[0].checked === false && options[1].checked === false) {
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