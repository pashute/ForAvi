# ForAvi
Collaborative Steered AI Interface

ForAvi is a modern web application for interacting with AI models through a unique three-tab interface. It consists of a React frontend (ForAviUI) and a Node.js backend (ForAviBE) that uses LangChain for AI integration.

## Features

- **Three-Tab Interface**: 
  - **Instructions Tab**: Define system-level instructions to guide AI behavior
  - **Conversation Tab**: Real-time chat interface with AI
  - **Details Tab**: Configure model parameters and view conversation statistics

- **LangChain Integration**: Leverages LangChain for flexible AI model interaction
- **Model Configuration**: Support for multiple AI models (GPT-3.5, GPT-4, Claude, etc.)
- **Real-time Chat**: Smooth conversation experience with typing indicators
- **Conversation Statistics**: Track message counts and token usage

## Project Structure

```
ForAvi/
├── ForAviUI/          # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatInterface.jsx      # Main chat interface
│   │   │   ├── InstructionsTab.jsx    # Instructions configuration
│   │   │   ├── ConversationTab.jsx    # Chat conversation
│   │   │   └── DetailsTab.jsx         # Settings and statistics
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── ForAviBE/          # Node.js backend API
    ├── src/
    │   └── index.js   # Express server with LangChain
    ├── package.json
    └── .env.example
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key (or other AI provider key)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pashute/ForAvi.git
cd ForAvi
```

2. Install Frontend Dependencies:
```bash
cd ForAviUI
npm install
```

3. Install Backend Dependencies:
```bash
cd ../ForAviBE
npm install
```

4. Configure Environment Variables:
```bash
cd ForAviBE
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### Running the Application

#### Start the Backend (Terminal 1):
```bash
cd ForAviBE
npm start
# Backend will run on http://localhost:5000
```

#### Start the Frontend (Terminal 2):
```bash
cd ForAviUI
npm run dev
# Frontend will run on http://localhost:3000
```

Open your browser and navigate to `http://localhost:3000`

## Usage

1. **Set Instructions**: Navigate to the Instructions tab and define how you want the AI to behave
2. **Start Chatting**: Switch to the Conversation tab and start interacting with the AI
3. **Configure Settings**: Use the Details tab to adjust model parameters and view statistics

## Configuration

### Backend Configuration (.env)

```env
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

### Frontend Configuration

The frontend is configured via `vite.config.js` and automatically proxies API requests to the backend.

## Development

### Frontend Development
```bash
cd ForAviUI
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
```bash
cd ForAviBE
npm run dev      # Start with auto-reload
npm start        # Start production server
```

## Technology Stack

### Frontend (ForAviUI)
- React 18
- Vite
- LangChain (client-side integration)
- Modern CSS

### Backend (ForAviBE)
- Node.js
- Express
- LangChain
- OpenAI API

## API Endpoints

### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "ok",
  "message": "ForAvi Backend is running"
}
```

### POST /api/chat
Send messages to AI and get responses

**Request:**
```json
{
  "messages": [
    {"role": "user", "content": "Hello"}
  ],
  "instructions": "You are a helpful assistant",
  "model": "gpt-3.5-turbo",
  "temperature": 0.7,
  "maxTokens": 2048
}
```

**Response:**
```json
{
  "response": "Hello! How can I help you today?",
  "model": "gpt-3.5-turbo",
  "timestamp": "2025-11-11T14:00:00.000Z"
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please open an issue on GitHub. 
