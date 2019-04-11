## Final Fantasy XIV Lookup

### What is it?

- Final Fantasy XIV Lookup (FFXIV Lookup) is a character and gear organization tool intended to make it more convenient for FFXIV players to store and share their character information.

### Objective

- The purpose of this project is to make an easy, expedient way for FFXIV players to keep track of their characters, current equipment, and stats.  It expands the character-view functionality of the current Lodestone by allowing players to store current information for future reference.  This allows players to view equipment and stats for jobs that are not currently active, save gear sets and portraits for future reference, and easily compare and contrast stats between two builds or classes.

### Installation

FFXIV Lookup was built using create-react-app on the front end, and Node.js with Express and Knex on the back end.  To install and run the application, please follow the steps below:

- Fork and clone this repository (e.g. `git clone`)
- Run the command `yarn install` or `npm install` in both root and client directories to install all required dependencies.
- To launch the front end:
    - type the command `yarn start` or `npm run start` in the client directory.  By default, this will launch the front end on `http://localhost:3000`.
    - Dependencies:
        - axios: ^0.18.0
        - prop-types: ^15.6.2
        - react": ^16.7.0
        - react-dom: ^16.7.0
        - react-redux: ^6.0.0
        - react-router-dom: ^4.3.1
        - react-scripts: 2.1.3
        - react-transition-group: ^2.5.3
        - redux: ^4.0.1
        - redux-thunk: ^2.3.0
        - styled-components: ^4.1.3
        - If you do not have LESS installed, run `yarn install -g less less-watch-compiler` or `npm install -g less less-watch-compiler` to make changes.
    - Dev Dependencies:
        - redux-logger: ^3.0.6
- To launch the back end:
    - Create a `.env` file in the root directory, and add an environmental variable with the name `JWT_SECRET`.  You may also add a variable named `PORT` if you do not want server to launch on the default port.
    - It is recommended that you type the command `yarn server` or `npm run server` in the root directory.  This will start the server using Nodemon for automatic server restarts after changes have been made.  
    - Alternatively, you may type the command `yarn start` or `npm run start` to start the server using Node. 
    - By default, either of the above commands will launch the server on `http://localhost:5000`.
    - Dependencies:
        - dotenv: ^7.0.0
        - express: ^4.16.4
        - knex: ^0.16.3
        - pg: ^7.9.0
    - Dev Dependencies:
        - nodemon: ^1.18.11

### Contributions

    - We're happy to accept any contributions seeking to improve functionality.
        - If you'd like to contribute in fixing an existing problem, please fork and clone the repository as detailed above.  When submitting pull requests, please be thorough in explaining the reasoning behind any changes.
        - If you notice a bug, issue, or inaccuracy in the application during use, please feel free to raise an issue to be addressed.  Select the `issues` tab on the repository, [here](https://github.com/edreeseg/ffxiv-lookup/issues), and press the `New Issue` button.  Please be thorough in explaining the issue and what steps can be taken to replicate it.