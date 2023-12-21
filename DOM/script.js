var heading = document.getElementById('main-heading');
heading.textContent = 'Hello, Updated DOM!';
var button = document.getElementById('change-text');
button.addEventListener('click', function() {
    heading.textContent = 'Text Changed!';
});
