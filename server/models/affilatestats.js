// import mongoose from "mongoose"

// const affilatestatsSchema=new mongoose.Schema({
//     userId:{
//         type:mongoose.Types.ObjectId,
//         ref:"User",  
//     },
//     affiliateSales:{
//         type:[mongoose.Types.ObjectId],
//         ref:"Transaction",
//     },
      
//    },{timestamps:true});
   
//    const AffilateStats=mongoose.model("AffilateStats",affilatestatsSchema);
//    export default AffilateStats;

import mongoose from "mongoose";

const AffiliateStatSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);
export default AffiliateStat;