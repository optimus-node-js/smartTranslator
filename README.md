# SmartTranslator

**SmartTranslator** is a powerful, real-time translation application designed to translate text between 105 languages. Built with a modern tech stack using Node.js for the backend and React.js for the frontend, this application leverages the power of Google Translate API to deliver fast and accurate translations.

## Features

- **Real-Time Translation:** Supports translation between 105 languages with instant feedback.
- **User-Friendly Interface:** Clean and intuitive UI built with React and Material-UI.
- **Multi-Language Support:** Includes major languages such as English, Spanish, French, German, Hindi, Chinese, and many more.
- **Seamless Integration:** Combines backend and frontend for a smooth translation experience.

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

3. Create a `.env` file in the backend directory and configure your environment variables:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the frontend application:

    ```bash
    npm start
    ```

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


### Key Additions:
- **Features Section:** Highlighted the real-time translation feature and 105 language support.
- **Installation Instructions:** Detailed steps for setting up both backend and frontend.
- **Usage Guide:** Instructions on how to use the application.
- **Technology Stack:** Listed the technologies used in the project.
