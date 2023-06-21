document.addEventListener('DOMContentLoaded', () => {
  const loggedInEmail = localStorage.getItem('loggedInEmail');
  const loggedInEmailElement = document.getElementById('loggedInEmail');
  const logoutLink = document.getElementById('logout');
  const upcomingMoviesElement = document.getElementById('upcomingMovies');
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

  // Function to fetch upcoming movies
  function fetchUpcomingMovies() {
    axios
    .get(
      'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',{
        headers: {
          'X-RapidAPI-Key': '650dbe08b6msh67af47a89fe2d43p1cdbfdjsna6743fa4f9cd',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
        },
      })
      .then((response) => {
        const movies = response.data.results;
        console.log(movies);
        // Render upcoming movies
        upcomingMoviesElement.innerHTML = movies
          .map(
            (movie) => `
            <div class="movie">  
              <div class="movie-img"> <img src="${movie.primaryImage ? movie.primaryImage.url : 'https://placehold.co/400'}"></div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h2>${movie.titleText.text}</h2>
                    <ul class="movie-gen">
                      <li>Released on</li>
                      <li>${movie.releaseDate.day}/${movie.releaseDate.month}/${movie.releaseDate.year}  /</li>
                      <li>${movie.titleType.text}</li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>

          `
          )
          .join('');
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
      });
  }

  // Fetch upcoming movies on page load
  fetchUpcomingMovies();

});
