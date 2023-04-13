import User from "../models/user.model.js";
import Transaction from "../models/transaction.model.js";
import overallStat from "../models/overallstats.model.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    console.log("dashboard");
    const currMonth = "November";
    const currYear = 2021;
    const currDay = "2021-11-15";
    // console.log("1");
    const transaction = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
      // const x=await overallStat.find();
      // console.log("2",x);
    const OverallStat = await overallStat.find({ year: currYear });
    // console.log("3",OverallStat);
    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = OverallStat[0];
    // console.log("4");
    const thisMonthStats = OverallStat[0].monthlyData.find(({ month }) => {
      return month === currMonth;
    });
    // console.log("5");
    const todayStats = OverallStat[0].dailyData.find(({ date }) => {
      return date === currDay;
    });
    // console.log("6");
    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transaction,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};
