import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage, SystemMessage, AIMessage } from '@langchain/core/messages'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ForAvi Backend is running' })
})

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, instructions, model, temperature, maxTokens } = req.body

    // Check if API key is configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({
        error: 'OpenAI API key not configured. Please set OPENAI_API_KEY in .env file'
      })
    }

    // Initialize the chat model
    const chatModel = new ChatOpenAI({
      modelName: model || 'gpt-3.5-turbo',
      temperature: temperature || 0.7,
      maxTokens: maxTokens || 2048,
      openAIApiKey: process.env.OPENAI_API_KEY
    })

    // Convert messages to LangChain format
    const langchainMessages = []
    
    // Add system message if instructions are provided
    if (instructions) {
      langchainMessages.push(new SystemMessage(instructions))
    }

    // Add conversation messages
    for (const msg of messages) {
      if (msg.role === 'user') {
        langchainMessages.push(new HumanMessage(msg.content))
      } else if (msg.role === 'assistant') {
        langchainMessages.push(new AIMessage(msg.content))
      }
    }

    // Get response from the model
    const response = await chatModel.invoke(langchainMessages)

    res.json({
      response: response.content,
      model: model || 'gpt-3.5-turbo',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error in chat endpoint:', error)
    res.status(500).json({
      error: 'Failed to process chat request',
      message: error.message
    })
  }
})

// Start server
app.listen(PORT, () => {
  console.log(`ForAvi Backend running on port ${PORT}`)
  console.log(`API endpoint: http://localhost:${PORT}/api`)
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn('\n⚠️  WARNING: OPENAI_API_KEY not set in environment variables')
    console.warn('   The chat endpoint will not work until you configure it.\n')
  }
})
