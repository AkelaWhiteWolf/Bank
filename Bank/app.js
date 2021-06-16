let mono = document.querySelector('.bank');
mono.removeAttribute('data-invisible');
mono.addEventListener('click', (e) => {
    console.log(e.target.matches('.bank__button-add'));
});