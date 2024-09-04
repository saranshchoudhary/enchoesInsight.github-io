// script.js
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const textarea = button.previousElementSibling;
        const comment = textarea.value.trim();
        if (comment !== '') {
            const ul = button.parentElement.querySelector('ul');
            const li = document.createElement('li');
            li.textContent = comment;
            ul.appendChild(li);
            textarea.value = '';
        }
    });
});
document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('blog-title').value.trim();
    const content = document.getElementById('blog-content').value.trim();
    const category = document.getElementById('blog-category').value;
    const imageFile = document.getElementById('blog-image').files[0];

    if (title === '' || content === '' || !imageFile) {
        alert('Please fill in all fields.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const newArticle = document.createElement('article');
        newArticle.innerHTML = `
            <h2>${title}</h2>
            <img src="${imageUrl}" alt="${title}">
            <p>${content}</p>
            <div class="comments">
                <h3>Comments</h3>
                <ul></ul>
                <textarea placeholder="Add your comment"></textarea>
                <button>Add Comment</button>
            </div>
        `;

        document.querySelector('main').appendChild(newArticle);
    };

    reader.readAsDataURL(imageFile);

    document.getElementById('blog-form').reset();
});

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
    navbar.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.display = 'none';
    hamburger.style.display = 'block';
    navbar.classList.remove('show');
});

// Add an event listener to close the navigation bar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && event.target !== hamburger) {
        closeBtn.style.display = 'none';
        hamburger.style.display = 'block';
        navbar.classList.remove('show');
    }
});
// Get the button element
var backButton = document.querySelector('.back-to-top');

// Add a click event listener to the button
backButton.addEventListener('click', function() {
    // Scroll the page to the top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

