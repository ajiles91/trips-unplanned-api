# Trips Unplanned API

This is the API for Trips Unplanned is a fullstack app that helps users to plan a trip to major cities with weather, restaurants and info for local attractions.

# Technologies Used:

Node.js, Express.js, PostgreSQL, SQL, Knex

# Important Links:

Live Link: https://trips-unplanned.ajiles91.now.sh/
Client Repo: https://github.com/ajiles91/trips-unplanned

## Setup

- Clone this repository to your local machine
- Install the dependencies for the project
- Ensure your PostgreSQL server is running
- Create a User for this exercise
- Create a database for the project with your user as the owner
- Rename the `example.env` file to `.env` and update the following fields with your database credentials:
  ```
   MIGRATION_DB_NAME=
   MIGRATION_DB_USER=
   MIGRATION_DB_PASS=
   DB_URL="postgresql://USERNAME@localhost/DATABASE_NAME"
  ```
- Run the command `npm run migrate -- 1` to create the database tables
- Run the command `npm t` to run tests

# API Documentation:

## GET /api/comments

The comments/recommendations section has an API with one endpoint /api/comments. GET /api/comments retrieves all the stored comments and displays them on the main page - stored as an array of objects

Properties of Each Object
-id:12 (number, generated when posted in database)
-username:Fake Name (string)
-comment:Comments about App or Recommendation(string)

## POST /api/comments

POST /api/comments - user submits their name and comment and/or recommendation in a form on the main page and it is sent as a POST request to the database
Properties of Each Object
-id:12 (number, generated when posted in database)
-username:Fake Name (string)
-comment:Comments about App or Recommendation(string)
