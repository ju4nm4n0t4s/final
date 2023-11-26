const express = require ('express');
const router =express.Router();
const Task=require('../models/task');

// Ruta para obtener todas las tareas
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().exec(); // Utiliza el método .exec() para ejecutar la consulta
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});
router.post('/',async(req,res)=>{
  const { name,work,age}=req.body;
  const task=new Task({name, work,age});
  await task.save();
  res.json({status:'task save'});
});
router.put('/:id',async(req, res)=>{
  const { name,work,age}=req.body;
  const newTask={name,work,age};
  await Task.findByIdAndUpdate(req.params.id,newTask);
  res.json({status:'task update'});
})

module.exports = router;
