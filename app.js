const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', event => {

    question.classList.toggle('active');
    const answer = question.nextElementSibling;
    if(question.classList.contains('active')) {
        answer.classList.toggle('active');
    } else {
        answer.classList.remove('active')
}
})
});





