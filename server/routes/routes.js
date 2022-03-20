const { Router } = require('express');
const userController = require('../controller/controller.js');
// create a new router instance
const userRouter = Router();



userRouter.get('/signup', (req, res) => {
  res.status(200).send('you did it!');
})
//sign up user - POST
//return status code 200 if successful
//Where do we go afterwards?
userRouter.post('/signup', userController.createUser, (req, res) => {
  // successful - send back a status of 200 and the data from the user table
  res.status(200).json(res.locals.newUser);
});


// verify user utilizing login - POST
userRouter.post('/login', userController.verifyUser, (req, res) => {
  // successful - send back a status of 200 and the user data from the user table
  res.status(200).json(res.locals.foundUser);
});

//verify user for during log in based on cookies - POST
//return status code 200 if successful
//Where do we go afterwards?


//add city and state to userprofile - PUT
//return status code 200 if successful
//end point?
userRouter.post('/location/:username', userController.updateUserLocation, (req, res) => {
  // successful - send back a status of 200 and the user data from the user table
  res.status(200).json(res.locals.updatedLocation);
});

//add favorite to user profile - PUT
//return status code 200 if successful
userRouter.post('/favorite', userController.addFavorite, (req, res) => {
  // successful - send back a status of 200 and the user data from the user table
  res.status(200).json(res.locals.favoriteLocation);
});



//delete favorite to user profile - DELETE
//return status code 200 if successful

//see all favorite tied to user pro
// le - GET
//return status code 200 if successful
//STRETCH

//add friend to user profile - PUT
//return status code 200 if successful

//delete friend to user profile - DELETE
//return status code 200 if successful

//see all friends tied to user profile - GET
//return status code 200 if successful



module.exports = userRouter;