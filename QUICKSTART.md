# Quick Start Guide

Get ForAvi up and running in minutes!

## Step 1: Install Dependencies

```bash
# Install frontend dependencies
cd ForAviUI
npm install

# Install backend dependencies
cd ../ForAviBE
npm install
```

## Step 2: Configure Backend

```bash
cd ForAviBE
cp .env.example .env
```

Edit `.env` and add your OpenAI API key:
```env
OPENAI_API_KEY=sk-your-api-key-here
PORT=5000
```

Get your API key from: https://platform.openai.com/api-keys

## Step 3: Start the Servers

### Terminal 1 - Start Backend
```bash
cd ForAviBE
npm start
```

You should see:
```
ForAvi Backend running on port 5000
API endpoint: http://localhost:5000/api
```

### Terminal 2 - Start Frontend
```bash
cd ForAviUI
npm run dev
```

You should see:
```
VITE v5.4.21  ready in XXX ms
➜  Local:   http://localhost:3000/
```

## Step 4: Open Your Browser

Navigate to: **http://localhost:3000**

## Step 5: Start Chatting!

1. **(Optional)** Click the **Instructions** tab to configure AI behavior
2. Click the **Conversation** tab
3. Type your message and press Enter or click Send
4. View model settings and statistics in the **Details** tab

## Troubleshooting

### Backend won't start
- Make sure Node.js 18+ is installed: `node --version`
- Check if port 5000 is already in use

### Frontend won't start
- Make sure all dependencies are installed: `npm install`
- Check if port 3000 is already in use

### Chat not working
- Verify your OpenAI API key is set in `ForAviBE/.env`
- Check backend is running on port 5000
- Check browser console for errors (F12)

### Dependencies installation fails
- Try using `npm install --legacy-peer-deps`
- This is already configured in `.npmrc` files

## Development Mode

Both servers support hot-reloading:

**Frontend**: Changes to React files will auto-reload the browser

**Backend**: Use `npm run dev` instead of `npm start` for auto-restart on changes

## Production Build

### Build Frontend
```bash
cd ForAviUI
npm run build
```
Output will be in `ForAviUI/dist/`

### Preview Production Build
```bash
npm run preview
```

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the [ForAviUI README](ForAviUI/README.md) for frontend details
- Review the [ForAviBE README](ForAviBE/README.md) for backend details

Happy chatting! 🚀
