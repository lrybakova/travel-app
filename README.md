# travel-app

This app allows you to check the weather in the city you are going to visit and see a picture of it

- If entered city's picture isnt found, then a picture of the ocuntry will be shown 
- If trip starts today, weather will be shown for today 
- If trip starts in a period of 2 weeks, then the weather will be shown as a forecast for intended day
- If the trip starts later than 2 weeks, app will show weather for the most far day available. 

# Web APIs 

- [GeoNames](http://www.geonames.org): API returns coordinates from the destination city name.

- [Weatherbit](https://www.weatherbit.io): this API was used to get weather forecasts based on coordinates from previous API.

- [Pixabay](https://pixabay.com): provides images of the city/country provided.

# Dependencies

- [Express](https://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)

## Webpack Loaders

- [Babel](https://github.com/babel/babel-loader)
- [CSS](https://webpack.js.org/loaders/css-loader/)
- [SASS](https://github.com/webpack-contrib/sass-loader)
- [Style](https://github.com/webpack-contrib/style-loader)

## Webpack Plugins

- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)
- [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/)
- [WorkboxPlugin](https://github.com/GoogleChrome/workbox): this plugin was used to add a service worker to the app.