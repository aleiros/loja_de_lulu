import { Router } from "express";
import { resourceUsage } from "process";
import * as PegaController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';


const router = Router();

router.get("/", PegaController.home);
router.get("/vestidos", PegaController.vestidos);
router.get("/sapatos", PegaController.sapatos);
router.get("/joias", PegaController.joias);

router.get("/search", SearchController.search);

export default router;
