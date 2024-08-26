import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Pool } from 'pg';



const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT, // Corrected typo here
  database: process.env.POSTGRES_DB,
});


app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM mytable');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/data', async (req, res) => {
  const { mycolumn } = req.body;
  try {
    const result = await pool.query('INSERT INTO mytable (mycolumn) VALUES ($1) RETURNING *', [mycolumn]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

