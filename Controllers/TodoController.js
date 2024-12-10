const Todo = require('../Models/Todo')

module.exports.getTask = async (req,res) => {
    const myTask = await Todo.find();
    res.send(myTask)
}
module.exports.addTask = async (req, res) => {
    const {text} = req.body;
    Todo.create({text})
    .then((data) => {console.log('Task added')
        res.send(data)
    })
}

module.exports.editTask = async (req, res) => {
    const {_id, text} =req.body;
    Todo.findByIdAndUpdate(_id, {text})
    .then(() => res.send('Task updated'))
    
}
module.exports.deleteTask = async (req,res) => {
    const {_id} = req.body;
    Todo.findByIdAndDelete(_id)
    .then(() => res.send('Task was Deleted'))

}