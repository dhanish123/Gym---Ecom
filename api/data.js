// /api/data.js
import { readFileSync } from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), 'db.json');
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    res.status(200).json(data);
  } catch (error) {
    console.error('Failed to load data:', error.message);
    res.status(500).json({ error: 'Data load error', details: error.message });
  }
}
