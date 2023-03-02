const anime = document.getElementsByClassName('luffy');

anime[0].addEventListener('mouseenter', function() {
  const body = document.body;
  body.style.backgroundColor = 'white';
});

anime[0].addEventListener('mouseleave', function() {
  const body = document.body;
  body.style.backgroundColor = '#2c3e50';
});

const moonIcon = document.getElementById('moon');

moonIcon.addEventListener('click', function(){
const body = document.body;

body.style.backgroundColor = 'black';
});