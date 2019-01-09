![CF](http://i.imgur.com/7v5ASc8.png) LAB 12
=================================================

## Lab 12 Express Server

### Author: Jacob Anderson, Tanner Seramur, Fletcher LaRue, and Ryan Gallaway

### Links and Resources
* [repo](https://github.com/TannerSeramur/12-express)
* [travis](http://xyz.com)
* [heroku](https://lab12-express-rg-ts-ja-fl.herokuapp.com)

### Modules
* `handleGetPosts.js`
* `handleGetPost.js`
* `handlePostPost.js`
* `handlePutPost.js`
* `handleDeletePost.js`
##### Exported Values and Methods
* `handleGetPosts.();`
* `handleGetPost.();`
* `handlePostPost.();`
* `handlePutPost.();`
* `handleDeletePost.();`



#### API Server Functionality
* Completes the server's CRUD functionality
  * Implements DELETE
  * Implements PUT
* Implements data integrity checking
  * Creates a constructor that all input for new and updated records (POST and PUT) can be run through.
  * This constructor returns a properly formatted and validated object (type checked, and required fields)
  * Only with a good object, is a write operation allowed to occur
* Adds support for a second model (with it's own routes and database)

### Setup
#### `.env` requirements
* `PORT` - Port Number 8080

#### Running the app
* `npm i` to install dependencies
* `npm start`
* endpoint: passing tests
#### Tests
* nodemon server.js
* node test
* superagent used to mock data and anticipate system error codes

