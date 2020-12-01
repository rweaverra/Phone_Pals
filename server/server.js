const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(express.static('../client/dist')); // this is the same is pulling up live server, actually IDK because live server is after it is bundled.
app.use(express.json());


// Listening for requests on the PORT
app.listen(PORT, () => {
    console.log('Serving up now at '+ JSON.stringify(PORT))
});