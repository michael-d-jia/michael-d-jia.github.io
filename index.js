document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.body.style.backgroundColor = document.querySelector('#color').value;
    });
});
