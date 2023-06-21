document.addEventListener('DOMContentLoaded', () => {
    const loggedInEmail = localStorage.getItem('loggedInEmail');
    const loggedInEmailElement = document.getElementById('loggedInEmail');
    const logoutLink = document.getElementById('logout');
    const searchInput = document.getElementById('searchInput');
    const searchResultsElement = document.getElementById('searchResults');
   
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
      window.location.href = 'index.html';
    });
  
    
  
    // Function to search movies
    function searchMovies(query) {
      axios
        .get(
          `http://www.omdbapi.com?s=${query}&apikey=f91ddec1`)
        .then((response) => {
          const message = response.data.Response;

          if(message == "False"){
            searchResultsElement.innerHTML = `<i class="search-text">${response.data.Error}</i>`;
          }else{
            const movies = response.data.Search;
            console.log(movies);
             // Render search results
          searchResultsElement.innerHTML = movies
            .map(
              (movie) => `
              <div class="movie">  
                <div class="movie-img"> <img src="${movie.Poster == 'N/A' ? 'https://placehold.co/400' : movie.Poster}"></div>
                <div class="text-movie-cont">
                  <div class="mr-grid">
                    <div class="col1">
                      <h2>${movie.Title}</h2>
                      <ul class="movie-gen">
                        <li>Released on</li>
                        <li>${movie.Year} / </li>
                        <li>${movie.Type}</li>
                      </ul>
                    </div>
                  </div>
                 
                </div>
              </div>
  
            `
            )
            .join('');
          }
        
         
        })
        .catch((error) => {
          console.error('Error searching movies:', error);
        });
    }
  
  
    // Handle search input changes
    let searchTimeout;
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      const query = searchInput.value.trim();
      if (query.length >= 3) {
        searchTimeout = setTimeout(() => {
          searchMovies(query);
        }, 1000);
      } else {
        searchResultsElement.innerHTML = '<i class="search-text">Searching..</i>';
      }
    });
  
  });
  