let users = require('../data/index.js')

const list = (req, res) => {
    res.json(users)
};
  
const show = (req, res) => {
    res.json(users.filter(user =>user._id === parseInt(req.params.id)))
};
  
const create = (req, res) => {
    // res.send(req.body)
      const newUser = {
      _id: users.length + 1,
      name: req.body.name,
      username: req.body.username,
      email: req.body.email
    //   ...req.body
    }
  
    users.push(newUser);
    res.json(users)
};

const put = (req, res) => {
    const {id} = req.params;
    console.log(id)
    const changes = req.body;

    

    if(id - 1 !== -1) {
        users[id - 1] = changes;
        console.log(users)
        res.status(200).json(users);
    } else {
        res.status(404).json({message:`user does not exist`})
    }
};

const deleteUser = (req, res) => {
    const {id} = req.params;

    const deleted = users[id -1]
    
    
    if(deleted) {
        users = users.filter(user => user !== deleted);
    } else {
        res
            .status(404)
            .json({ message: "User you are looking for does not exist"});
    }
    res.json(users)
};
    

  
module.exports = {
    list,
    show,
    create,
    put,
    deleteUser
};