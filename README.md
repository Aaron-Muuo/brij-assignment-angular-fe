# brij-assignment-angular-fe
Frontend assignment: Movie dashboard

## Assignment

All designs should be made using pure html, css and typescript. To make the dashboard please do not use any framework such as material or bootstrap. Only allowed plugins as far as design is concerned is tailwindcss and gsap for animations.

Hint:Keyframes in css can help you achieve some of gsap animations so research on keyframes to help with things like the preloader.

### FRONTEND ANGULAR ENGINEERING PROJECT

Overview:

Imagine you were contracted by a movie fanatic and they needed a way to get information about upcoming movies, search their favourite movies and also suggest movies that need a part two or even a movie idea they have.

This application should be accessible on mobile (apk – android -use ionic ) and also web. Also, the application should be secure hence you need to ensure they can successfully login and logout. They first need a small prototype for proof of concept so in a couple of days these are the features that need to be delivered:

1. A login page – (Responsive for web and desktop) something similar to this https://merchant.brij.money/auth/login

  a. On web the image to the left can be of a movie you like or something but on mobile it should collapse to only view the login form with inputs for email and password.

For 1.a the email and password is submitted to a mock service that simulates a submission to the server and if the password is Password.0707 and email is yourname@gmail.com then it is successful otherwise it fails. On success it saves the email on localstorage and you to the dashboard: The saved email will be displayed on the top right section of the dashboard. Remember to put appropriate error messages on invalid email or password.

2. A dashboard – with three sections

  a. Upcoming movies – display the movies in beautiful cards (use dribble or behance for ideas)
  
    i. For the title of the movie create a custom pipe that converts the name to the Swahili version if it has any of the following keywords
    
      1. Fast
      2. Family
      3. Rings
      
    Example if the title is Fast and furious it becomes haraka and furious.

  b. A place to search movies hence it should have one search input box and below it should show the data.
  
    i. When typing it should show a skeleton loader of a card and when on stops typing it triggers an api to search movie using what has already been typed and display the movie cards respectively
    
    1. Ensure you make this very efficient in that the api is only triggered when the user types atleast 3 characters and stops
    typing for atleast a second. (Hint use rxjs features i.e. debounce)
  
  FOR 2.a and 2.b use https://api.postman.com/collections/26340352-c4bde052-1a34-4010-af5f-aa7d271b8d96?access_key=PMAT-01H2YTSM78CQ4GYGXQVFQM2HCM Postman collection

  c. A section to suggest a part two of a movie which has a form with the following fields
  
    i. Type (select input with two options – suggest new or recommend part two)
    
    ii. Reason – textarea
    
    iii. Image upload input – recommended movie billboard (use any image for now)
  
  For 2.c submit the data to localstorage and save it there for use on part d. For the image save it as bas64 for easy access on part d
  
  d. Show movie suggestions: shows a list of submitted  suggestions/recommendations with attached data: The table should also be  responsive (horizontally scrollable on small screens)
