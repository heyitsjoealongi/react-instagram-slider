# react-instagram-slider

This Instagram slider provides extended features to the Instagram API through React [Components](https://reactjs.org/docs/components-and-props.html) and [Props](https://reactjs.org/docs/components-and-props.html#props-are-read-only) to deliver sliding, looping, and automation functionality through React.js and ES6.

*This application was built with React and runs on Node, it was tested with Jest and Enzyme.*

## Contents

* [About](#about)
* [Build](#build)
* [Overview](#overview)
  * [Requirements](#prerequisites)
  * [Installation](#installation)
* [Scripts](#scripts)
* [Contact](#contact)
* [Additional](#additional)

## About

React sliders can be imported to React.js as packages from [NPM](https://reactjs.org/docs/components-and-props.html#props-are-read-only), various builds allow you to connect your image library to sliders packed with features, this slider is API focused and connects functionality to pre-built features you may not be able to mutate.

#### Solution:
* Sliders built around libraries require configured JSON files for implementing image assets.
* The functionality of sliders relies on multi-package implementation to build.
* Applying usability in a direct method leaves the functionality open-ended.

Creating classes directly for the data interpreted by the API allows the engineer to experience a freedom of development that is particular to their needs, while concisely and minimally organizing the structure of the application.


## Build
This slider is compiled using four main elements that align to provide the data source, connect the API to the application, manage the state of the API, and apply functionality for navigating through the data.
* [Instagram API](https://www.instagram.com/developer/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [SuperAgent](https://github.com/visionmedia/superagent)
* [FontAwesome](https://fontawesome.com/)


## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) which means all components, classes, and functions work within an unejected react application. You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/). To get started fork, download, or git clone this repository to retrieve the codebase.

### Requirements

This application and its components were built through Yarn, with React, and run on Node.js all prerequisites are listed below, the rest are active in the directory of the project file and become accessible with the script `yarn install`.
* Yarn
* Node


### Installation

1. Create your *Developer Access Token*
[https://instagram.pixelunion.net/](https://instagram.pixelunion.net/)

2. Install Yarn Package Manager
https://yarnpkg.com/

3. Clone the repo
    ```sh
    git clone https://github.com/collectedview/react-instagram-slider.git
    ```

4. Create a new file in your project folder titled `.env`

5. Enter your *Developer Access Token* into `.env`
    ```JS
    REACT_APP_NOT_SECRET_CODE=ReplaceWithYourAccessToken
    ```
5. Install the directory through yarn in your console
    ```sh
    yarn install
    ```

## Scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Additional
Improving the functionality of this slider can be shifted by implementing the handling of the API, optimizing the flow of data through [State](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly) and [Redux](https://redux.js.org/), shifting the bindings with React [Hooks](https://reactjs.org/docs/hooks-intro.html), and importing packages for handling the loading after ejecting to create a new application structure.

As the Instagram developer tools become more refined, there will be an increased flow of data to particular endpoints for shaping functionality through React.js and [Redux](https://redux.js.org/).
