const questions = document.querySelectorAll(".question");

document.addEventListener("DOMContentLoaded", function() {

    questions.forEach(question => {
        question.addEventListener("click", e => {
            e.currentTarget.classList.toggle("active");

            const answer = question.querySelector(".answer");
            const actualHeightAnswer = answer.scrollHeight;

            if(!answer.style.maxHeight) {
                answer.style.maxHeight = `${actualHeightAnswer}px`;
            } else {
                answer.style.maxHeight = null;
            }

            questions.forEach(element => {
                if(question != element) {
                    element.classList.remove("active");
                    element.querySelector(".answer").style.maxHeight = null;
                }
            });

        });
    });

});