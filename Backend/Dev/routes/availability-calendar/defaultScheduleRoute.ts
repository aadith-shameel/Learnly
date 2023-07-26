import express from "express";
import defaultScheduleCont from "../../controllers/availability-calendar/defaultScheduleCont";

const router = express.Router();

router.post("/saveDefaultSchedule", defaultScheduleCont.saveDefaultSchedule);
router.get("/getDefaultSchedule", defaultScheduleCont.getDefaultSchedule);
router.get("/getDefaultAvailableDates", defaultScheduleCont.getDefaultAvailableDates);

export default router;