import { Router } from "express";
import { getRequirements } from "../controllers/requirementsController.js";

const router = Router();
router.post("/", getRequirements);

export default router;