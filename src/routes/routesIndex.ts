import { Router } from "express";
import battleRoutes from "./battleRoutes.js"
import rankingRoutes from "./rankingRoutes.js"

const router = Router();

router.use(battleRoutes);
router.use(rankingRoutes);

export default router;