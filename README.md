# SmartTranslator

**SmartTranslator** is a powerful, real-time translation application designed to translate text between 105 languages. Built with a modern tech stack using Node.js for the backend and React.js for the frontend, this application leverages the power of Google Translate API to deliver fast and accurate translations.

**Live:** [smart-translator-rahulgifasus-projects.vercel.app](https://smart-translator-rahulgifasus-projects.vercel.app)

## Features

- **Real-Time Translation:** Supports translation between 105 languages with instant feedback.
- **User-Friendly Interface:** Clean and intuitive UI built with React and Material-UI.
- **Multi-Language Support:** Includes major languages such as English, Spanish, French, German, Hindi, Chinese, and many more.
- **Seamless Integration:** Combines backend and frontend for a smooth translation experience.

## Run locally

```bash
git clone https://github.com/optimus-node-js/smartTranslator.git
cd smartTranslator
npm install          # installs backend and frontend
npm run dev          # API on :5000, app on :4000 (proxied)
```

MongoDB is optional. Set `MONGODB_URI` in `backend/.env` to cache translations; without it the app translates directly.

## API

| Method | Endpoint | Body | Response |
|---|---|---|---|
| `POST` | `/api/translate` | `{ speech, languageFrom, languageTo }` | `{ translated, cached }` |
| `GET` | `/api/health` | | `{ ok, cache }` |

## Deploy

One Vercel project from the repo root: `vercel.json` builds `frontend/dist` and serves the Express API from `api/index.js`. Optional env var: `MONGODB_URI`.

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the text you want to translate in the input box.
3. Select the source and target languages from the dropdown menus.
4. Click the "Translate" button to get the translated text in real time.

## Technology Stack

- **Frontend:** React.js, Material-UI
- **Backend:** Node.js, Express.js, MongoDB
- **API:** Google Translate API

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## Acknowledgements

- Thanks to the developers of [Google Translate API](https://www.npmjs.com/package/@vitalets/google-translate-api) for providing the translation service.

## Author

**Rahul Vishwakarma**, Senior Full Stack Developer based in Ahmedabad, India

[![Portfolio](https://img.shields.io/badge/Portfolio-rahul--vishwakarma--portfolio.vercel.app-0A66C2?style=flat-square&logo=vercel&logoColor=white)](https://rahul-vishwakarma-portfolio.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Rahul%20Vishwakarma-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/rahul-vishwakarma-101346192)
[![Email](https://img.shields.io/badge/Email-karmarahul67%40gmail.com-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:karmarahul67@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-optimus--node--js-181717?style=flat-square&logo=github)](https://github.com/optimus-node-js)

