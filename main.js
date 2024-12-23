const questionTitle = document.querySelectorAll('.question-title')

const toggleQuestion = function(){
    this.classList.toggle('active');
}

questionTitle.forEach(function(title){
    title.addEventListener('click',toggleQuestion)
})