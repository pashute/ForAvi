# ForAviBE - Backend API

Backend service for ForAvi collaborative AI interface.

## Features

- RESTful API using Express
- LangChain integration for AI model management
- Support for multiple AI models (OpenAI, Claude, etc.)
- CORS enabled for frontend communication
- Environment-based configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
```bash
cp .env.example .env
# Edit .env and add your API keys
```

3. Run the server:
```bash
npm start        # Production
npm run dev      # Development with auto-reload
```

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `PORT` - Server port (default: 5000)

## API Documentation

### Health Check
```
GET /api/health
```

### Chat Endpoint
```
POST /api/chat
Content-Type: application/json

{
  "messages": [{"role": "user", "content": "Hello"}],
  "instructions": "System instructions",
  "model": "gpt-3.5-turbo",
  "temperature": 0.7,
  "maxTokens": 2048
}
```

## Development

The server uses Node.js watch mode in development for automatic reloading on file changes.
