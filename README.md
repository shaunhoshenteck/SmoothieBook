## Project Name

Smoothie Recipe Tracker

An application where a user can create and manage their own smoothie recipes, built with React, JavaScript, and CSS.

## Project Status

This project is currently deployed on Heroku. Users can create their own smoothie recipes, sort through them, and update or delete their current recipes. Saved recipes will be stored temporarily on local storage, so users can come back to their recipes. It can be found at: https://smoothie-recipe-tracker.herokuapp.com/

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Run Test Suite:

`npm test`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## Reflection

This project took around 10 hours to build. Project goals included using technologies I learned up until this point and familiarizing myself with documentation for new features.

I wanted to build an application that allowed users to create their own smoothie recipes and track/update/delete their recipes. I started this process by using the `create-react-app` boilerplate, then adding `react-router` for routing and used the `context API` to maintain a global state of smoothies. I also used various hooks to manipulate data through prop drilling, state management.

One of the main challenges I ran into was coming up with the logic to delete and add ingredients, whilst maintaing the global state. I also ran into some problems trying to set the state of nested objects as well as developing some pagination logic. Finally, I also wanted to keep track of each smoothie's unique ids, which would be used during ingredient addition and deletion but to be able to retrieve each id properly, I had to figure out how to retrieve the id from a search query in the url. This lead me to spend a few hours on researching context API, pagination on MaterialUI, various hooks such as useHistory, and local storage. I also used libraries such as `React-Bootstrap`,` MaterialUI`, and `Toastify` to give the project a bit of polish.

At the end of the day, the technologies implemented in this project are React, React-Router, Formik (Form), Yup(Form validation), React-Bootstrap, MaterialUI, Toastify, and a significant amount of JavaScript and JSX. I chose to use the `create-react-app` boilerplate to minimize initial setup.
