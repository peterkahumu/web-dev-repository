document.addEventListener('DOMContentLoaded', function(){
    const feedback = document.querySelector('#feedback');
    const form = document.querySelector('#form');

    feedback.style.display = 'none';

    form.addEventListener('submit', function(e){
        e.preventDefault();

        if (feedback.textContent.trim() != ""){
            feedback.style.display = 'block';
            setTimeout(function(){
                feedback.classList.add('fade-out'); // add the fade-out class to div and start fading out.
                feedback.textContent = '';
            }, 5000)
        }
    })
})