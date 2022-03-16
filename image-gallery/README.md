# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install dependencies for styled components

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Notes

- Login page saves user to localStorage, if the user logs in, their session is recorded there. Once the user hits the logout button, this entry is removed and the user is taken back to the login page
- Uploaded the images to imgur (supports CORS) and used the configuration utility to supply a source for the panorama viewer.
- Optimized for developing the panorama view switching between 360 images and displaying image details. In future versions, would include a separate page for a gallery of images (e.g. if there were hundreds of images instead of five)
