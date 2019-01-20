# ️API Project: Timestamp Microservice
   
- The API endpoint is GET [project_url]/api/timestamp/:date_string?
- A date string is valid if can be successfully parsed by new Date(date_string).
- Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
- In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.
- If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
- If the date string is valid the api returns a JSON having the structure
- {"unix": <date.getTime()>, "utc" : <date.toUTCString()> }
- e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}
- If the date string is invalid the api returns a JSON having the structure
- {"error" : "Invalid Date" }.

## Example Usage:

    [project url]/api/timestamp/2015-12-25
    [project url]/api/timestamp/1450137600

## Example Output:

{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"} 

**Live URL**:   https://coffee2019.herokuapp.com/

# Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [How to use API](#how-to-use)
- [How API works](#how-API-works)
- [Deployment](#deployment)
- [Docker](#docker)
- [License](#license)


## Prerequisites
-------------

- [Node.js 10.13.0+](http://nodejs.org)
 
## Getting Started
---------------
To get start clone the repository:


### Get the latest snapshot
git clone https://github.com/dgifani/Timestamp-Microservice

### Change directory
cd Timestamp-Microservice

### Install NPM dependencies
npm install

### Then simply start App
npm start

### For Testing
npm test 

   Server Listening on port: 3000
  Test the TimeStamp Micro-service API, assume API running on ../server.js on port 3000
    √ Test GET request on Path  /:date_string?(1547959678000) to return UTC and Unix timestamp
    √ Test GET request on Path  /:date_string(2014-12-12) ? to return UTC and Unix timestamp

  Test the Micro-Service TimeStamp API for Invalid request, assume API running on ../server.js
    √ should return 400 if requested parmas are not date format


  3 passing (52ms)

## Project Structure
-----------------

    | Name                               | Description                             |
    | ---------------------------------- | --------------------------------------- |
    | **test**/test.js                   | Test Script                             |    
    | server.js                          | The Node Express server file.           |
    | package.json                       | NPM dependencies.                       |
    | Dockerfile                         | Build Docker Container.                 |



## List of Packages
----------------

    | Package                         | Description                                |
    | ------------------------------- | ------------------------------------------ |
    | express                         | Minimalist web framework Version "^4.16.4" |
    | mocha                           | Test framework. Version "^5.2.0"           |
    | chai                            | BDD/TDD assertion library. Version "^4.2.0"|
    | chai-http                       | BDD/TDD assertion library. Version "^4.2.1"|


## How to use API

   Returns the object of UTC timestamp, and Unix time based on String params

* **URL**

       The URL Structure (base url, port, /)
       Example  http://localhost:3000/:sting_date?   

* **Method:**
       `GET` 
       This API only supprrt GET method

  
  
*  **URL Params**

       * @param {String} (optional) string_date - parmas string for convert time 
    sample request: https://localhost.com:3000/:string_date? => ISO-8601 or unix in second 

   **Optional:**
    ` params are optional, API return current date time in unix and UTC string format` 

* **Success Response:**
  
   `return the JSON object included date time in unix and UTC items`
  * **Code:** 200 <br />
    **Content:** 
    ```json
        {
            "unix": 1547959244945,
            "utc": "Sun, 20 Jan 2019 04:40:44 GMT"
        }
    ```
* **Error Response**
  * **Code:** 404 <br />
    **Content:** 

            <!DOCTYPE html>
             <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>Error</title>
            </head>
            <body>
                <pre>Cannot PUT /assas</pre>
            </body>
            </html>

    * **Code:** 400 <br />
    **Content:** 

            {
                "error": "Invalid Date"
            }       



# How API Works

`Please refer to Server.js and ./test/test.js to see code comments for each section of code`


# Deployment

#### Heroku
    The below information valid for gitlab CI/CD to deploy in Heroku
* Add yml file to root directory of the project
* Create a new App in Heroku
* Add API-Key to gitlab Env file
* Give it a shot    
         


#### Docker
       Docker allows the code deployable to any docker compatible platform
#### Build image 
* docker build -t your-image-name>/img01 .

#### run image in container
* docker run -p 3000:3000 -d your-image-name>/img01:latest

#### Get container ID
* $ docker ps

#### Print app output
* $ docker logs `container id` 


#### Enter the container
* $ docker exec -it `container id` /bin/bash
  
### Test
* curl -i localhost:3000  

# License
MIT
