<!-- PSEUDO CODE -->
<!-- 
    Create a Create list input form
    Create Natural Form List that will capture user Input (ie. I feel like Comedy and have ~90 mins)
    The two captured values will be passed into API call that will return movies based on the search criteria
    User can add a movie they like to a list they have created and so forth
        Add button on every movie pulled from API
    Delete button on every movie that has been added to a list
    

    1. Navigation Link to:        
        - Search for a movie
            Create Natural Form List that will capture user Input (ie. I feel like Comedy and have ~90 mins)
            The two captured values will be passed into API call that will return movies based on the search criteria
            Show related movies
                User can add a movie they like to a list they have created and so forth
                    Add button on every movie pulled from API
        - Show User's Lists
            - Delete List
            - Add List
        - Show User's Movies
            -Delete Movie
                Delete button on every movie that has been added to a list


    2. API Call
        - Based on user's input


    3. Firebase
        - Create a new Database
            - Multiple users                                                              | Stretch Goal
            - Add button will call set(ref) method to firebase
            - Delete button will call remove(ref) method to firebase   


    4. Flow
        - Home page: 
            * Nav
                - Search for specific movie from our list
            * Show Movies from a API call (favorite - default)
                - Dropdown to show other pre-defined API searchs
                - Search for movie names (imput) -                              | Stretch Goal
                - Select a movie
                    Show this existing user's list
                    User can add a new list
                        - Create list input form
        - Show User's Lists
            * List of lists with 2 buttons to delete and add list names
            * User click the list name will show the movies inside the list

        - Show User's Movies
            * Has:
                Poste
                Movie details
                Heart
                Button to Add to list
                Dropdown with lists available for the user



-->


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
