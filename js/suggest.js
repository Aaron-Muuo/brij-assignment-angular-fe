document.addEventListener('DOMContentLoaded', () => {


  const suggestion_storage = localStorage.getItem('suggestions');

  if(suggestion_storage == ''){

    const suggestions = [];
  // Convert the array to a JSON string
  const jsonMyArray = JSON.stringify(suggestions);
  localStorage.setItem('suggestions', jsonMyArray);

  }

 

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
    localStorage.removeItem('suggestions');
    window.location.href = 'index.html';
  });





  // Function to submit a movie suggestion
  function submitMovieSuggestion(event) {
    event.preventDefault();
  
    const suggestionType = suggestionTypeSelect.value;
    const suggestionReason = suggestionReasonInput.value;
    const suggestionImage = suggestionImageInput.files[0];

  
    if (suggestionImage) {
      // Convert image to base64
      const reader = new FileReader();
      reader.onloadend = function () {
        const base64Image = reader.result.split(',')[1]; // Extract base64 data from the result

          // Save to localStorage
        const suggestionObject = {
          suggestionType: suggestionType,
          suggestionReason: suggestionReason,
          suggestionImage: base64Image,
        };

        const suggestionObject_recent = localStorage.getItem('suggestions');

          const myArray = JSON.parse(suggestionObject_recent);
          myArray.push(suggestionObject);
          const formatted_array = JSON.stringify(myArray);
          localStorage.setItem('suggestions', formatted_array);
          window.location.href =  'suggest.html';
        

      };
      reader.readAsDataURL(suggestionImage);

 
    }else{
      alert('Select an image');
    }
  }
  

  // Function to fetch movie suggestions
  function fetchMovieSuggestions() {
   
    const suggestionObject_db = localStorage.getItem('suggestions');

    if(suggestionObject_db == '' || suggestionObject_db == '[]'){

    }else{
    // Render movie suggestions

    const myArray = JSON.parse(suggestionObject_db);
    movieSuggestionsElement.innerHTML = myArray
    .map(
      (suggestionObj) => `
      <div class="suggestion-card">
        <img src="${suggestionObj.suggestionImage}" alt="Suggestion Image">
        <p>${suggestionObj.suggestionType}</p>
        <p>${suggestionObj.suggestionReason}</p>
      </div>
    `
    )
    .join('');
    }

    
  }

  // Handle movie suggestion form submission
  suggestionForm.addEventListener('submit', submitMovieSuggestion);

  // Fetch movie suggestions on page load
  fetchMovieSuggestions();
});
