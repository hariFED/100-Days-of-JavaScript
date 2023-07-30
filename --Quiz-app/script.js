
// class Quiz{
//     constructor(questions){
//         this.score = 0;
//         this.questions = questions;
//         this.questionIndex = 0;
//     }

//     getQuestionIndex(){
//         return this.questions[this.questionIndex]
//     }

//     guess(answer){
//         if(this.getQuestionIndex().isCorrectAnswer(answer)){
//             this.score++
//         }
//         this.questionIndex++;
//     }
//     isEnd(){
//         return this.questionIndex === this.questions.length
//     }

// }



// class Questions{
//     constructor(text, options, answer){
//         this.text = text;
//         this.options =options;
//         this.answer = answer;
//     }

//     isCorrectAnswer(options){
//         return this.answer === options;
//     }
// }


// function displayQuestions(){
//     if(Quiz.isEnd()){
//         finalScore();
//     }
//     else{
//         let questionElem = document.getElementById('quiz-question')
//         questionElem.innerHTML = Quiz.getQuestionIndex().text;

        
//     }
// }