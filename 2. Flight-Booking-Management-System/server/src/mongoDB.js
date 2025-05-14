
import dotenv from 'dotenv';
dotenv.config();

const mongoDb = process.env.MONGODB_ATLAS_URL ||'mongodb://localhost:27017/FlightTickect';

export default mongoDb;