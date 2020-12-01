const express = require('express');
const app = express();
const PORT = 4000;
const cors = require('cors');

app.use(express.static('../client/dist')); // this is the same is pulling up live server, they both should pull up index.html. and index.html has the bundle as a script tag. the bundle has all of the javascript tags inside of it, so it just packages it nicely for the index.html.
app.use(express.json());
app.use(cors());


// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});