import express from 'express';
import asyncHandler from 'express-async-handler';

import { getWeightData } from '../controllers/fitbit.js';

const router = express.Router();

router.get('/weight', asyncHandler(getWeightData));

export default router;
