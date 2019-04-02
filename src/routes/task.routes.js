const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);   
});
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);   
});
router.post('/', async (req, res) =>{
    const { title, descryption } = req.body;
    const task = new Task({title, descryption});
    await task.save(); 
    res.json({status: 'task received'});

});
router.put('/:id', async(req, res) => {
    const { title, descryption } = req.body;
    const ntask = new Task({title, descryption});
    await Task.findByIdAndUpdate(req.params.id, ntask);
    res.json({status: 'task update'});
});
router.delete('/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: "task deleted"});    
});
module.exports = router;
