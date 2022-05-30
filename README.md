# TheMovieApp

Welcome to TheMovieApp, Search movies by name, year, language, genre and/or ratings. Use our intuitive filters to find your movies.

## Table of Contents

- [Technologies and Libraries Used](#Technologies)
- [Prerequisites](#prerequisites)
- [How To Get Started](#Starting)
  - [Testing](#testing)
- [Project Structure](#project-structure)
  - [Styling](#styling)
  - [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributors](#contributors)

## Technologies

- **React**
- **[Jest](https://jestjs.io/docs/tutorial-react)** for testing
- **[Sass & SCSS](https://sass-lang.com/guide)** for styling

## Prerequisites

1. Open the browser and go to `https://www.themoviedb.org/signup`.
2. Register for an account and request for an API Key.
3. Clone project `git clone git@github.com:ssewilliam/theMovieApp.git`
4. Navigate to root directory.
5. Create a .env file following the .env.example file
6. Replace the value for `REACT_APP_API_KEY` with your own API Key from step 2

### Starting

1. Download and install Node.js atleast 16.9.1 on your machine
2. Build dependencies using `npm i` or `yarn` if you have yarn installed
3. Set up respective environment variables in your `.env` file in your root directory.
4. Run the project using `npm start` or `yarn start`

### Testing

To run the tests use this command: `npm run test`

## Project Structure

### Folder Structure

The folder structure looks something like this:

```
src
   |-- components
   |   |-- accordionFilter
   |   |-- checkbox
   |   |-- movieitem
   |   |-- movielist
   |   |-- searchbar
   |   |-- searchfilter
   |   |-- sidenavbar
   |-- css
   |   |-- base
   |-- images
   |-- pages
   |   |-- discover
```

### Styling

For styling we will use **Sass** and styled componentss,

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run prettier`

Launches the prettier runner to run code farmat checks on the codebase.<br />
Running `npm prettier:fix` starts the runner with autowrite mode turned on to autoformat fixable styles
[running prettier](https://prettier.io/docs/en/index.html).

### `npm run lint`

Launches the eslint runner to run eslint checks on the codebase.<br />
Running `npm lint:fix` starts the runner with autofix mode turned on to autofix fixable rules
[running eslint](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Challenge Todos
 - :heavy_check_mark: Style the component and checkmark to look like the mockup provided
 - :heavy_check_mark: Complete the MovieItem component
 - :heavy_check_mark: Complete the "AccordionFilter" component and re-use it for all filter categories
 - :heavy_check_mark: Write the necessary functions to open and close the sidebar
 - :heavy_check_mark: Implement a hamburger icon that controls the open state of the sidebar.
 - :heavy_check_mark: Preload and set the popular movies and movie genres when page loads
 - :heavy_check_mark: Update search results based on the keyword and year inputs
 - :heavy_check_mark: All of your API requests should be in this file


## Contributors

[ssewilliam](https://github.com/ssewilliam)
