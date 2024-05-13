import pkg from 'pg';
import { Pool, PoolConfig } from 'pg';
import { config } from 'dotenv';


config();


const dbConfig: PoolConfig = {
    user: process.env.DB_USER || '',
    host: process.env.DB_HOST || '',
    database: process.env.DB_NAME || '',
    password: process.env.DB_PASSWORD || '',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    ssl: {
        rejectUnauthorized: false
    }
}

const pool = new Pool(dbConfig);

export default pool;
