import express from "express";
import taskRouter from './src/Route/taskRouter.js'
const app=express();
app.use(express.json());
app.use('/Tasks',taskRouter);
const port=4000;

app.listen(port,()=>{
  console.log(`Server is running on ${port}`)
})
