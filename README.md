# Generate a Poem Using Google Gemini

## Description
This project is a web application that generates poems using Google's Gemini generative AI model. It consists of a React frontend and a Node.js backend. The backend interacts with the Google Generative AI API to generate poems based on user-provided prompts, and the frontend provides a user-friendly interface to input prompts and display the generated poems.

## Features
- Input a custom prompt to generate a poem.
- Poems are generated using Google Gemini's generative AI model.
- Automatic poem refresh every 30 seconds.
- Simple and clean React-based user interface.

## Prerequisites
- Node.js (v16 or higher recommended)
- A Google API key with access to the Google Generative AI API

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd generate-a-poem-using-google-gemini
   ```

2. Install dependencies for the frontend:
   ```bash
   npm install
   ```

3. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. Create a `.env` file in the `backend` directory with your Google API key:
   ```
   GOOGLE_API_KEY=your_google_api_key_here
   ```

## Running the Project

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
   The backend server will run on [http://localhost:5000](http://localhost:5000).

2. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

## Usage

- Open the frontend URL in your browser.
- Type a prompt for the poem in the input box.
- Click the "Generate" button to generate a poem based on your prompt.
- The generated poem will be displayed below the input.
- The poem will automatically refresh every 30 seconds.

## Project Structure

```
.
├── backend/                # Node.js backend server
│   ├── index.jsx          # Express server and Google Gemini integration
│   ├── package.json       # Backend dependencies and scripts
│   └── .env               # Environment variables (Google API key)
├── src/                   # React frontend source code
│   ├── Components/        # React components (PoemBox, Header, Footer, etc.)
│   ├── App.jsx            # Main React component
│   └── main.jsx           # React entry point
├── index.html             # Frontend HTML entry point
├── package.json           # Frontend dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please contact the project maintainer.
