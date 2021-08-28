const { User, Thought } = require('../models');



const thoughtController = {
    // get all thoughts from a user ?
    getAllThoughts (req, res) {
        Thought.find()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // get thoughts from a user 
    getThoughtByUser(req, res){
        Thought.findOne({_id: req.params.id})
        .populate({
            path: 'username'
        })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: "No thought with this id! "});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // create a thought 
    createThought(req,res){
        Thought.create(req,body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));

    },
    // update thoughts 
    updateThought(req,res){
        Thought.findOneAndUpdate({_id: req.params.id}, req.body, { new: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No thought found with this id!'})
                return;
            }
            res.json(dbUserData);

        })
        .catch(err => res.status(400).json(err));
    },

    // delete thought 
    deleteThought(req,res){
        Thought.findOneAndDelete({_id: req.params.id })
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No thought found with this id '})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = thoughtController;