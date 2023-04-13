import express from "express"
import {getAdmins,getUserPerformance} from "../controllers/managment.controller.js"
const router=express.Router();

router.get("/admins",getAdmins);
console.log("dasdasd");
router.get("/performance/:id", getUserPerformance);
console.log("dasdasdxx");
export default router;