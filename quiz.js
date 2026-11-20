
// Web Dev I Lab Assignment 4
// Prompt Quizzer - A Quiz Game

// 1. Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "new delhi"
    },
    {
        question: "Which language is used for web development?",
        answer: "javascript"
    },
    {
        question: "What is 10 + 15?",
        answer: "25"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {

    // 3. Initialize Score
    let score = 0;

    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // 5. Prompt for User Input
        let userAnswer = prompt(quizQuestions[i].question);

        // Handle cancellation
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        // 6. Normalize the Input
        userAnswer = userAnswer.toLowerCase().trim();

        // 7. Check the Answer
        if (userAnswer === quizQuestions[i].answer) {

            score++;

            // 8. Provide Immediate Feedback
            alert("Correct Answer! Well done.");

        } else {

            alert("Wrong Answer! The correct answer is: "
                + quizQuestions[i].answer);
        }
    }

    // 9. Display the Final Score
    alert("Quiz Completed!\nYour Final Score is: "
        + score + "/" + quizQuestions.length);

    console.log("Quiz Completed!");
    console.log("Your Final Score: "
        + score + "/" + quizQuestions.length);
}

// 10. Run the Quiz
runQuiz();
