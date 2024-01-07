import express from "express";
import Tasks from "../Controller/taskController.js";
const app=express();
const router=express.Router();

router.get('/firstTask',(req,res)=>{
    try {
        const tasks=new Tasks();
        const inputString=req.body.data;
        const result=tasks.isValidBrackets(inputString);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status||500).json({message:error.message||'Internal server Error'});
    }
})
router.get('/secondTask',(req,res)=>{
    try {
        const tasks=new Tasks();
        const inputArr=req.body.arr;
        const result=tasks.removeDuplicates(inputArr);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status||500).json({message:error.message||'Internal server Error'});
    }
})
router.get('/thirdTask',(req,res)=>{
    try {
        const tasks=new Tasks();
        const inputArr=req.body.arr;
        const targetSum=req.body.targetSum;
        const result=tasks.hasSubsetSum(inputArr, targetSum,inputArr.length);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status||500).json({message:error.message||'Internal server Error'});
    }
})
router.get('/fourTask',(req,res)=>{
    try {
        const tasks=new Tasks();
        const inputArr=req.body.arr;
        const result=tasks.commonPrefix(inputArr);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(error.status||500).json({message:error.message||'Internal server Error'});
    }
})
export default router;