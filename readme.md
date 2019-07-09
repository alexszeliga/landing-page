# Landing Environment

This repo is a development environment for quickly creating landing pages. It uses minimal tooling with zero configurations.

# Dependencies:
* [Node.JS](https://nodejs.org/en/download/)

# Would you like to know more?
* Express server set up using express-generator
  * handlebars package replaced by express-handlebars
* Automation and transpilation handled by Gulp
  * SCSS transpiled to CSS using Sass
  * JS transpiled to JS using Babel

# How to get started
* Clone the repository to your local machine.
* Open a terminal in the working directory of the cloned repository 
* Type `npm install` to pull in all the relevant dependencies
* type `npm start` to start the server and Gulp's watch function.
  * Gulp will watch `src/scss/*.scss` files and `src/js/*.js` files and will retranspile them on changes to the file.
