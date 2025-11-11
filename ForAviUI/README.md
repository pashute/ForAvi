# ForAviUI - Frontend Application

React-based frontend for ForAvi collaborative AI interface.

## Features

- Modern React 18 with Vite
- Three-tab interface design
- Real-time AI chat
- Model configuration
- Conversation statistics
- Responsive design

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

The application will be available at http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Components

- **ChatInterface** - Main container managing tabs and state
- **InstructionsTab** - Configure AI system instructions
- **ConversationTab** - Chat interface with messaging
- **DetailsTab** - Model settings and conversation stats

## Configuration

Backend API URL is configured in `vite.config.js` proxy settings.

## Build

```bash
npm run build
```

Output will be in the `dist/` directory.
