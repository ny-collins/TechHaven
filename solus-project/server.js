import express from 'express';
import { config } from 'dotenv';
import { join } from 'path';
import { fileURLToPath } from 'url';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'public')));

app.get('/api/emailjs-key', (req, res) => {
    if (!process.env.EMAILJS_PUBLIC_KEY) {
        return res.status(500).json({ error: 'EmailJS public key not configured' });
    }
    res.json({ publicKey: process.env.EMAILJS_PUBLIC_KEY });
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});