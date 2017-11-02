# Monster Escape
This is a web based game app.
The project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
And the main dev stack including: react, redux, react-redux, redux-thunk, lodash.

## Game Rules

### Start Game
After enter your player name, and click on any Square on board as starting position. Game would start and monsters are chasing you now. 

### Player Move
You can press the arrow keys on keyboard (up, down, left, right) to give the player a direction at any moment. Your player will move towards the direction by itself until you change it again.

### Monster Move
All monsters at board will move automatically and may change their directions randomly, so be careful!

### Hit Wall
If any piece hit the border of the board, it will turn to opposite direction from next move automatically. e.g. When hitting the left wall, it will turn to the right direction next.

### Level Up
If you survive every 10 seconds, you got LEVEL UP. And there will be two more monsters added to the board to make your next level more challenging.

### Game Over
At any moment, when you got caught by a monster, the player is DEAD. Game Over!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run deploy`

Builds the app and then deploye the production site to github page.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.