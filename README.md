# Lord of the APIS

This project was build using react hooks and it was styled with emotion. In order to detach the logic from the presentation and make it reusable I create a custom hook called useHeroList which fetches the data from the API. In order to avoid unnecessary requests to the API while changing the value of the deck id from the search bar I used lodash debounce. The model folder contains the Hero type

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
