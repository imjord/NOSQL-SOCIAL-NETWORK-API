const {User, Thought } = require("../models");



const userController = {
    // get all users
    getAllUsers(req,res) {
        User.find()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
        },

    // get user by id 
    getUserById(req, res){
        User.findOne({_id: req.params.id })
        .populate({
          path: 'thoughts', 
          })
          .populate({
            path: 'friends',
          })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: " No user with this id!! "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },
    // createUser
    createUser(req, res) {
    User.create(req.body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(400).json(err));
  },
    // update User by id
    updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  },
  // delete User
    deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No User found with this id!' });
          return Thought.deleteMany({_id: dbUserData.thoughts});
        }
        res.json(dbUserData);
      })
      .catch(err => res.status(400).json(err));
  }
}






module.exports = userController;