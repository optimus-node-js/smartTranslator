const { translate } = require('@vitalets/google-translate-api');
const Translation = require('../models/translationModel');

exports.getTranslation = async (req, res) => {
  const { speech, languageFrom, languageTo } = req.body;
  console.log(`Received request: ${JSON.stringify(req.body)}`);

  try {
    // Check if translation exists in the database
    let translation = await Translation.findOne({ word: speech, language: languageTo });

    if (translation) {
      console.log("Fetched from Database");
      return res.json({ translated: translation.answer });
    }

    console.log(`Translating: ${speech} from ${languageFrom} to ${languageTo}`);
    
    // Use Google Translate API
    const response = await translate(speech, { from: languageFrom, to: languageTo });

    // Store translation in the database
    translation = new Translation({
      word: speech,
      language: languageTo,
      answer: response.text
    });

    await translation.save();
    console.log("Saved to Database");

    res.json({ translated: response.text });

  } catch (error) {
    console.error("Translation Error: ", error);
    res.status(500).json({ error: 'Translation failed' });
  }
};
