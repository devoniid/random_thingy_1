const questions = [
    {
        question: "Choose the correct form of this sentence: apples grow on trees. billy like to Pick them.",
        optionA: "Apples grow on trees, Billy likes to pick them.",
        optionB: "Apples grow on trees, billy likes to Pick them",
        correctOption: "optionA"
    },

    {
        question: "A summary is a paraphrased version of a text, the idea in short",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "A Conflict of a story is what?",
        optionA: "The place that the story takes place",
        optionB: "The problem of the story",
        correctOption: "optionB"
    },

    {
        question: "What is the theme?",
        optionA: "The problem of the story",
        optionB: "The idea the story is trying to convey(central idea)",
        correctOption: "optionB"
    },

    {
        question: "Floods can cause tremendous damage. They can ruin houses, roads and buildings. Floods can take down trees and cause mudslides. It often leaves mud, sand and debris behind. It can take months to clean up after a flood. What is the main idea?",
        optionA: "Floods can cause a lot of damage",
        optionB: "Floods cause mudslides",
        correctOption: "optionA"
    },

    {
        question: "A penny for your thoughts? If it’s a 1943 copper penny, it could be worth as much as fifty thousand dollars. In 1943, most pennies were made out of steel since copper was needed for World War II, so the 1943 copper penny is ultra-rare. Another rarity is the 1955 double die penny. These pennies were mistakenly double stamped, so they have overlapping dates and letters. If it’s uncirculated, it’d easily fetch $25,000 at an auction. Now that’s a pretty penny. ",
        optionA: "Rare and valuable pennies",
        optionB: "Pennies that are shiny",
        correctOption: "optionA"
    },

    {
        question: "Historical writing is?",
        optionA: "tells a story",
        optionB: "Gives facts and explanations about historic events",
        correctOption: "optionB"
    },

    {
        question: "Persuasive writing is?",
        optionA: "Persuades readers to adopt a point of view or take an action.",
        optionB: "Gives information about a topic to the reader",
        correctOption: "optionA"
    },

    {
        question: "What is the setting of a story?",
        optionA: "The place/places and time where the story takes place",
        optionB: "The problem or conflict of the story",
        correctOption: "optionA"
    },

    {
        question: "The Antagonist of a story is the bad guy.",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "A simile is what?",
        optionA: "A joke told to the reader to convince them of something",
        optionB: "A comparison using the words like and as",
        correctOption: "optionB"
    },

    {
        question: "Sideways Stories from Wayside School by Louis Sachar. Leslie sat in front of Paul.  She had two long, brown pigtails that reached all the way down to her waist.  Paul saw those pigtails, and a terrible urge came over him.  He wanted to pull a pigtail.  He wanted to wrap his fist around it, feel the hair between his fingers, and just yank.  He thought it would be fun to tie the pigtails together, or better yet, tie them to her chair.  But most of all, he just wanted to pull one ",
        optionA: "Third-Objective",
        optionB: "Third-Limited",
        correctOption: "optionB"
    },


    {
        question: "A flashback is the literary device that is used when the author wants to remind the reader of a prior event.",
        optionA: "False",
        optionB: "True",
        correctOption: "optionB"
    },

    {
        question: "What is the literary element that gives a hint that something is going to happen?",
        optionA: "Foreshadow",
        optionB: "Symbolism",
        correctOption: "optionA"
    },

    {
        question: "When the reader makes a(n)_______ about something, they are predicting what will happen",
        optionA: "Inference",
        optionB: "Denotation",
        correctOption: "optionA"
    },

    {
        question: "A first-person view includes words like, me, I and we",
        optionA: "True",
        optionB: "False",
        correctOption: "optionA"
    },

    {
        question: "What is the order of events in a story? ",
        optionA: "Categorization",
        optionB: "Sequence",
        correctOption: "optionB"
    },

    {
        question: "A book written about someone else's life is called a what?",
        optionA: "Biography",
        optionB: "Personal Narrative",
        correctOption: "optionA"
    },

    {
        question: "Usually found at the end of a passage or the back of the book to help the reader understand the meaning of important words.",
        optionA: "Graphic",
        optionB: "Glossary",
        correctOption: "optionB"
    },

    {
        question: "The words above or under a picture in a story",
        optionA: "Caption",
        optionB: "Sub-heading",
        correctOption: "optionA"
    },

    {
        question: "Before you put on that Angry Birds costume and exhaust yourself roving from door to door pandering for candy, take a minute to reflect on the tradition in which you are taking part. Halloween is believed to have come from an ancient Celtic festival dating back some 2,000 years. November 1st was the Celtic New Year and marked the end of summer to the Celts, so they celebrated on its eve by wearing costumes made of animal skins and dancing around bon fires. Over the next two millennia, this primitive celebration grew to be candy fueled costume ball that we know today. What is the main idea?",
        optionA: "The origin of Halloween",
        optionB: "Animal costumes",
        correctOption: "optionA"
    },

    {
        question: "What should a sentence have?",
        optionA: "Capital letter, subject, verb, complete thought, end mark",
        optionB: "Capital letter, subject, end mark",
        correctOption: "optionA"
    },

    {
        question: "The main idea of a story is called a what?",
        optionA: "Main idea",
        optionB: "Rhyme",
        correctOption: "optionA"
    },

    {
        question: "Who is the protagonist?",
        optionA: "The narrator",
        optionB: "The good guy",
        correctOption: "optionB"
    },

    {
        question: "What is the dictionary or literal meaning of a word? ",
        optionA: "Denotation",
        optionB: "Connotation",
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