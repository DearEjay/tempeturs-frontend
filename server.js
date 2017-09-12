const express = require('express');
const app = express();

//index.html is in TLD
app.use(express.static(__dirname + '/'));

// Heroku bydefault set an ENV variable called PORT=443
//  so that you can access your site with https default port.
// Falback port will be 8080; basically for pre-production test in localhost
// You will use $ npm run prod for this
console.log("Listening on port ", process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);