import overallStat from "../models/overallstats.model.js";

export  const getSales=async(req,res)=>{
    try{
        const overAllStat=await overallStat.find();
        res.status(200).json(overAllStat[0])
    }
    catch(Err)
    {
        res.status(404).json({message:Err.message})
    }
}