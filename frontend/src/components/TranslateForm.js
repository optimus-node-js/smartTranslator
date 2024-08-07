// TranslateForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Select, MenuItem, Typography, Box } from '@mui/material';

const TranslateForm = () => {
  const [speech, setSpeech] = useState('');
  const [languageFrom, setLanguageFrom] = useState('en');
  const [languageTo, setLanguageTo] = useState('hi');
  const [translated, setTranslated] = useState('');

  const langs = {
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-cn': 'Chinese Simplified',
    'zh-tw': 'Chinese Traditional',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'ma': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
  };

  const handleTranslate = async () => {
    console.log("Translate button clicked!");
    if (speech.trim()) {
      try {
        const response = await axios.post('http://localhost:5000/', {
          speech,
          languageFrom,
          languageTo,
        });
        console.log("Response received:", response.data);
        setTranslated(response.data.translated);
      } catch (error) {
        console.error("There was an error translating the text!", error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Translate Text
      </Typography>
      <form>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
          <TextField
            label="Enter text"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={speech}
            onChange={(e) => setSpeech(e.target.value)}
            sx={{ marginRight: '1rem' }}
          />
          <TextField
            label="Translation"
            variant="outlined"
            multiline
            fullWidth
            rows={4}
            value={translated}
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <Select
            value={languageFrom}
            onChange={(e) => setLanguageFrom(e.target.value)}
            displayEmpty
            sx={{ marginRight: '1rem', width: '48%' }}
          >
            {Object.entries(langs).map(([code, name]) => (
              <MenuItem key={code} value={code}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            value={languageTo}
            onChange={(e) => setLanguageTo(e.target.value)}
            displayEmpty
            sx={{ width: '48%' }}
          >
            {Object.entries(langs).map(([code, name]) => (
              <MenuItem key={code} value={code}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Button variant="contained" color="primary" type="button" fullWidth onClick={handleTranslate}>
          Translate
        </Button>
      </form>
    </Box>
  );
}

export default TranslateForm;
