import mongoose from "mongoose";
import User from "../models/user.model.js";
import Transaction from "../models/transaction.model.js";
export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

// export const getUserPerformance = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const userWithStats = await User.aggregate([
//       { $match: { _id: new mongoose.Types.ObjectId(id) } },
//       {
//         $lookup: {
//           from: "affiliatestats",
//           localField: "_id",
//           foreignField: "userId",
//           as: "affiliateStats",
//         },
//       },
//       {
//         $unwind: "$affiliateStats",
//       },
//     ]);
//     const saleTranscations = await Promise.all(
//       userWithStats[0].affiliateStats.affiliateSales.map((id) => {
//         return Transaction.findById(id);
//       })
//     );
//     const filteredSaleTransaction = saleTranscations.filter(
//       (transaction) => transaction !== null
//     );
//     res
//       .status(200)
//       .json({ user: userWithStats[0], sales: filteredSaleTransaction });
//   } catch (err) {
//     res.status(404).json({
//       message: err.message,
//     });
//   }
// };


export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("ID:",id);
    // const user=await User.findById(id);
    // console.log("User:",user);
    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      // { $unwind: "$affiliateStats" },
    ]);
    console.log("user:",userWithStats[0]);
    const affiliateStats=userWithStats[0].affiliateStats;
    const saleTransactions = await Promise.all(
      affiliateStats[0].affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );
    console.log("saleTransactions:",saleTransactions)
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );
      console.log("filter",saleTransactions)
    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    console.log("Error");
    res.status(404).json({ message: error.message });
  }
};