import { dbGetWeightData } from '../models/fitbit.js';

const getWeightData = async (req, res) => res.status(200).json(await dbGetWeightData());

export { getWeightData };
