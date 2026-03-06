const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/",auth,async(req,res)=>{
  const task = await Task.create({
    title:req.body.title,
    description:req.body.description,
    user:req.user.id
  });

  res.json(task);
});

router.get("/",auth,async(req,res)=>{
  const tasks = await Task.find({user:req.user.id});
  res.json(tasks);
});

router.put("/:id",auth,async(req,res)=>{
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  );
  res.json(task);
});

router.delete("/:id",auth,async(req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

module.exports = router;