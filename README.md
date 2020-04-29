# travel-app

# Development Environment and Architecture

* Architecture 

- All files present at the picture are present
- Webpack file is split in two
- img folder added into views folder
- in server folder are two files - app.js and index.js - neccessity for being able to test app.js (isolated function app.listen)
- App succesfully renders a homepage with simple design and required functionality: user can input date of trip and name of city where he is heading and receive weather there and pic from the city/country of visit. User can remove the trip then abd make a new one if he wants, by clicking remove button 

* Webpack 

- Webpack config contains 5 scripts - clean (removes dist folder), test, start (runs express server), build-prod and build-dev (with web-dev-server)

* Testing
- I have 2 test for express app and one for application 

* Offline capabilities 
- Project has service workers installed

# HTML & CSS 

* Usability 
- App is fully responsive
* Styling
- I believe that it is done in a logical way. All interactive elements (2 buttons) have hover states
* HTML structure
- HTML structure is intended with classes and IDs, they make perfect sense at least for me
* Visual design 
- Made from scratch

# API and JS inegration 

* As an extra option I chose to look for a picture of a country in the case of absence pictures for chosen city. In order to additionally improve user experience I also customized the request to make it only bring photos, not drawings, and to be travel themed. 


# Documentation 

* README - included and customized with app description and dependencies
* Comments are present and explain what code does
* Code is formatted using auto formatter and in accordance to guidelines 



