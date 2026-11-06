const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const translationController = require('./controllers/translationController');

const app = express();
app.use(cors());
app.use(express.json({ limit: '50kb' }));

// MongoDB is an optional cache: translations still work when it is not configured or unreachable.
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
let dbPromise = null;
function connectDB() {
  if (!MONGODB_URI) return Promise.resolve(false);
  if (!dbPromise) {
    dbPromise = mongoose
      .connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 })
      .then(() => true)
      .catch((err) => {
        console.error('MongoDB unavailable, continuing without cache:', err.message);
        dbPromise = null;
        return false;
      });
  }
  return dbPromise;
}

app.use(async (req, res, next) => {
  req.dbReady = await connectDB();
  next();
});

app.get(['/api', '/api/health'], (req, res) => res.json({ ok: true, service: 'smart-translator', cache: req.dbReady }));
app.post(['/api/translate', '/'], translationController.getTranslation);

if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Smart Translator API on ${PORT}`));
}

module.exports = app;
