const { translate } = require('@vitalets/google-translate-api');
const Translation = require('../models/translationModel');

exports.getTranslation = async (req, res) => {
  const speech = String(req.body?.speech || '').trim();
  const languageFrom = String(req.body?.languageFrom || 'auto');
  const languageTo = String(req.body?.languageTo || '');

  if (!speech || !languageTo) return res.status(400).json({ error: 'Text and target language are required' });
  if (speech.length > 5000) return res.status(400).json({ error: 'Text is too long (max 5000 characters)' });

  try {
    if (req.dbReady) {
      const cached = await Translation.findOne({ word: speech, from: languageFrom, language: languageTo }).lean();
      if (cached) return res.json({ translated: cached.answer, cached: true });
    }

    const response = await translate(speech, { from: languageFrom, to: languageTo });

    if (req.dbReady) {
      Translation.create({ word: speech, from: languageFrom, language: languageTo, answer: response.text }).catch((err) =>
        console.error('Cache write failed:', err.message)
      );
    }

    res.json({ translated: response.text, cached: false });
  } catch (error) {
    console.error('Translation error:', error.message);
    const rateLimited = /429|Too Many Requests/i.test(error.message || '');
    res.status(rateLimited ? 429 : 502).json({
      error: rateLimited ? 'The translation service is busy, please try again in a minute' : 'Translation failed, please try again',
    });
  }
};
