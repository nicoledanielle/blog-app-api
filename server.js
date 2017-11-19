'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('common'));

// you need to import `blogPostsRouter` router and route
// requests to HTTP requests to `/blog-posts` to `blogPostsRouter`

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

//******* */
//my code starts below//
//******* */

let server;

function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`Your app is listening on port ${port}`);
      resolve(server);
    })
      .on('error', err => {
        reject(err);
      });
  });
}
  
function closeServer(){
  return new Promise((resolve, reject) => {
    console.log('closing server');
    server.close(err =>{
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}
  
if (require.main === module) {
  runServer().catch(err => console.error(err));
}