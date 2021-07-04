////// *** Imports **** ////
// npm modules
import express from 'express';
import cors from 'cors';
import path from 'path';
// routes
import routes from './routes';



////**** configuration for Server ****/////

// create instance of express
const app = express();
// enable the ability to parse (interpret the information) the body of requests as JSON.
app.use(express.json());
// enables our API to be accessible from other domains.
app.use(cors());

// declare the port that our server will run on. (Listen to)
const port = 3000;
// handlebars specific configurations
app.use(express.urlencoded({extended: false}));
// declare where Handlebars view files are located
// join the path called 'views'(folder) with the current directory. In the current directory, we want to look for the 'views' folder.
app.set('views', path.join(__dirname, 'views'));
// what type of engine are we using? handlebars.
app.set('view engine', 'hbs');
// if you had css, you need to add the app.use and put the CSS in the public directory.
app.use(express.static(path.join(__dirname, 'public')));



///// *** add routes to express app *** /////

// this means, everything after the server localHostServer:300 /  ( this slash), refer to the routes file.
app.use('/', routes);


// start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})