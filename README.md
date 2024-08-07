# Smart Translator

Smart Translator is a robust translation application that utilizes the power of Google Translate API and MongoDB to provide efficient and real-time language translation. This application is designed to first check the database for existing translations, and if not found, fetch translations from Google API while caching them for future requests. This strategy enhances performance and reduces API calls, making the application both fast and cost-effective.

## Features

- **Real-time Translation**: Translates text between languages in real-time using Google Translate API.
- **Database Caching**: Automatically saves translations in MongoDB to reduce repeated API calls and improve response times.
- **Modern UI**: A user-friendly interface built with React, offering a seamless user experience.
- **Scalable Architecture**: Designed with a modular architecture separating frontend and backend for scalability.

## Technologies Used

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Translation API**: Google Translate API

## Installation

### Clone the Repository

```bash
git clone https://github.com/YourUsername/smartTranslator.git
cd smartTranslator
```

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory and add your MongoDB URI and Google API key.

4. Start the backend server:

   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Enter the text you want to translate and select the target language.
3. Click the "Translate" button to get the translated text.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License.
```

Please let me know if you need further assistance!
