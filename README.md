# Kweather-app

> A General purpose weather app built with Vue (Vuex) + Firebase (eventually)

## Build Setup

```bash
# install depedencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build for production with minification
npm run build
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Implemented so far

- Currently the app has the main page which calls 2 API's. One for the random pictures [majority should be of the sky] and the other for weather data.

  **Unsplash.com** -

  - Will be adding photos based on weather

  **OpenWeatherAPI**

  - All weather data is pulled from the API (...when it wants to play nicely)

## In the works

- Firebase sole purpose is to save user data from Vuex to eventually be used for a session based experience '#Cookies!!'
- Firebase will also be used to serve JSON data that holds the full name, location, population, and other details about cities in the effort in making the search more user friendly, interactive and accurate.
- Styling takes forever but being that API's are fully configured...with a bit of restructuring on the endpoints and file structure.
- Map API's will need to be implemented as well as chart system.
