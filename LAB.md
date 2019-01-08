# LAB: Express

## Before you begin
* You'll need to initialize this lab folder as a new node module, install your dependencies, setup your npm script commands, and pull in your config files

## Assignments
### API Server Functionality
* Complete the server's CRUD functionality
  * Implement DELETE
  * Implement PUT
* Implement data integrity checking
  * Create a constructor that all input for new and updated records (POST and PUT) can be run through.
  * This constructor should return a properly formatted and validated object (type checked, and required fields)
  * Only with a good object, should a write operation be allowed to occur
* Add support for a second model (with it's own routes and database)

### API Server Modularity
* Modularize the server. Currently all of the code lives in the `lib/server.js` file.
  * Create a 404 (not found) handler middleware as a module in `lib/middleware`
  * Create a 500 (error) handler middleware as a module in `lib/middleware`
  * Move the routes out to a separate file:  `lib/routes.js`
  * Create a models folder with a file for the data model
    * Incorporate your data integrety checking code
    * The data model should manage the data (in-memory) and expose crud methods 
      * GET, POST, PUT, DELETE
      * Each should return the correct data to the server 
      * The server should adapt/format the data as a proper response to the client
      
### API Server Documentation
* Swagger Docs
  * Document all routes and methods for all models
  * You can start with the swagger docs from the previous lab
  * Place the swagger.json files in the `doc` folder
  * Implement the `/api/v1/MODEL/doc` route for each of your models
* JSDoc
  * Document all of your functions
  * Export your documentation in a `doc` folder

### Deployment
* Your server must be deployed at Heroku
* Your routes should all be testable remotely

### Testing
* Create as many "units" as you can to test functions and data integrity
* For the actual routes, use `supertest` to do end-to-end testing
* Your tests must be running green on travis.com

###### Stretch Goal:
* Style everything!

###  Documentation
* Complete the README.md file included in the lab folder
* Be sure to include the URLs to your server, api docs, and jsdocs at Heroku
