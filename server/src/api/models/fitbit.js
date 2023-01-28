import { query } from '../../db/index.js';

const dbGetWeightData = async () => {
  const { rows } = await query('SELECT * FROM weight');
  return rows;
};

export { dbGetWeightData };
