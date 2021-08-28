const router = require('express').Router();


const {
    getAllThoughts,
    getThoughtByUser,
    createThought,
    updateThought,
    deleteThought
  }= require("../controllers/thought-controller")

// Set up GET all and POST at /api/Users
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

// Set up GET one, PUT, and DELETE at /api/Users/:id
router
  .route('/:id')
  .get(getThoughtByUser)
  .put(updateThought)
  .delete(deleteThought);



module.exports = router;