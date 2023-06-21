document.addEventListener('DOMContentLoaded', () => {
  const loggedInEmail = localStorage.getItem('loggedInEmail');
  const loggedInEmailElement = document.getElementById('loggedInEmail');
  const logoutLink = document.getElementById('logout');
 
  const suggestionForm = document.getElementById('suggestionForm');
  const suggestionTypeSelect = document.getElementById('suggestionType');
  const suggestionReasonInput = document.getElementById('suggestionReason');
  const suggestionImageInput = document.getElementById('suggestionImage');
  const movieSuggestionsElement = document.getElementById('movieSuggestions');

  const menu = document.getElementById('menu-bars');
    
  
    menu.addEventListener('click', (e) => {
      menu.classList.toggle("change");
      const sidebar = document.getElementById('sidebar');
      const content = document.getElementById('content');
      const header = document.getElementById('header');

      if(menu.classList.length == 1){

        sidebar.style.marginLeft = '0px';
        content.style.marginLeft = '250px';
        header.style.marginLeft = '250px';

      }else{

        sidebar.style.marginLeft = '-250px';
        content.style.marginLeft = '0px';
        header.style.marginLeft = '0px';
      }
     
    
    });
    
  // Display logged-in user email
  if (loggedInEmail) {
    loggedInEmailElement.textContent = loggedInEmail;
  }

  // Handle logout
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('loggedInEmail');
    window.location.href = 'login.html';
  });





  // Function to submit a movie suggestion
  function submitMovieSuggestion(event) {
    event.preventDefault();

    const suggestionType = suggestionTypeSelect.value;
    const suggestionReason = suggestionReasonInput.value;
    const suggestionImage = suggestionImageInput.files[0];

    // TODO: Implement the logic to submit the suggestion (e.g., send a POST request to an API)

    // Clear form fields after submission
    suggestionTypeSelect.value = 'suggest-new';
    suggestionReasonInput.value = '';
    suggestionImageInput.value = '';
  }

  // Function to fetch movie suggestions
  function fetchMovieSuggestions() {
    // TODO: Implement the logic to fetch movie suggestions (e.g., send a GET request to an API)

    // Example placeholder code
    const suggestions = [
      {
        type: 'suggest-new',
        reason: 'This is a new movie suggestion',
        image: 'https://example.com/image1.jpg',
      },
      {
        type: 'recommend-part-two',
        reason: 'This is a part two recommendation',
        image: 'https://example.com/image2.jpg',
      },
    ];

    // Render movie suggestions
    movieSuggestionsElement.innerHTML = suggestions
      .map(
        (suggestion) => `
        <div class="suggestion-card">
          <img src="${suggestion.image}" alt="Suggestion Image">
          <h3>${suggestion.type}</h3>
          <p>${suggestion.reason}</p>
        </div>
      `
      )
      .join('');
  }

  // Handle movie suggestion form submission
  suggestionForm.addEventListener('submit', submitMovieSuggestion);

  // Fetch movie suggestions on page load
  fetchMovieSuggestions();
});
