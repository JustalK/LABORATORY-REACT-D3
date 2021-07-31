# LABORATORY REACT D3.js

## Goal

This project is my testing with the d3.js library

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

- [Experiences](#experiences)
- [Documentation](#documentation)
- [Organization](#organization)
- [Development](#development)
- [Running](#running)
- [Commands](#commands)

## Experiences

- **Experience1**: Testing to show an image in the center inside the svg
- **Experience2**: Testing the event mousemove by drawing a crosshair following the cursor
- **Experience3**: Creating a bar chart in a div
- **Experience4**: Creating a bar chart in a svg
- **Experience5**: Creating a chart from a csv
- **Experience6**: Rotating a bar chart
- **Experience7**: Adding a zoom and move on an image
- **Experience8**: Using the brush for creating square on an image
- **Experience9**: Saving the brush rectangle through the event
- **Experience10**: Creating a movable annotation

## Documentation
#### Code documentation

The jsdoc can be generated locally with the following command :

```
npm run build:docs
```

#### Resources

- [D3 Graph Gallery](https://www.d3-graph-gallery.com/)
- [Observable](https://observablehq.com/@d3)

## Organization
#### Organization of the global folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| out           | The documentation generated by jsdoc                    |
| public        | Regroup the images and public files                     |
| src           | Regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | Regroup the components used inside the pages            |
| constants     | Regroup the exported constants                          |
| pages         | Regroup the components representing the pages           |
| services      | Regroup the services of the app                         |
| styles        | Regroup the scss files                                  |


## Development
#### Packages

- **react-app-rewired**: Allow us to rewrite the config of React without ejecting the app
- **customize-cra**: Allow us to rewrite the config of webpack and create module alias
- **eslint**: For linting the code with EsLint
- **@babel/eslint-parser**: Changing the parser for having access to eslint in babel
- **eslint-config-airbnb**: For having the set of rules airbnb for eslint
- **eslint-plugin-import**: For managing the alias import with eslint
- **eslint-plugin-react**: For managing the react rules
- **prettier**: For formating the style of the code
- **eslint-plugin-prettier**: For using the prettier package with esLint
- **sass**: For using the SASS css preprocessor (scss)
- **jsdoc**: For managing the dev documentation of the project
- **react-router-dom**: For managing the router and the path to the differents pages
- **react-helmet**: For managing the meta of the differents page
- **d3**: For managing the svg manipulation

## Running

For running the API, a single command is needed.

```
npm run start
```

## Commands

- **npm run start**: Run the linter and then the project
- **npm run build**: Build the project
- **npm run test**: Run the test of the project
- **npm run eject**: Eject the application (sometimes necessary)
- **npm run linter:fix**: Run the linter and fix the errors
- **npm run build:docs**: Build the documentation from the comments in the code
- **npm run check-update**: Check if the package are up to date (for now, everything is except the testing and webvital)
