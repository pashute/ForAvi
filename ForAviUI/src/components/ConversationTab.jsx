import { useState } from 'react'
import './ConversationTab.css'

function ConversationTab({ messages, addMessage, instructions, conversationDetails }) {
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date().toISOString()
    }

    addMessage(userMessage)
    setInputMessage('')
    setIsLoading(true)

    try {
      // Call backend API to get AI response
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          instructions: instructions,
          ...conversationDetails
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from API')
      }

      const data = await response.json()
      
      const assistantMessage = {
        role: 'assistant',
        content: data.response,
        timestamp: new Date().toISOString()
      }

      addMessage(assistantMessage)
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure the backend is running.',
        timestamp: new Date().toISOString(),
        isError: true
      }
      addMessage(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="conversation-tab">
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-state">
            <h3>Start a conversation</h3>
            <p>Type your message below to begin chatting with the AI.</p>
            {instructions && (
              <div className="active-instructions">
                <strong>Active Instructions:</strong>
                <p>{instructions.substring(0, 150)}{instructions.length > 150 ? '...' : ''}</p>
              </div>
            )}
          </div>
        ) : (
          messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.role} ${message.isError ? 'error' : ''}`}
            >
              <div className="message-header">
                <span className="message-role">
                  {message.role === 'user' ? '👤 You' : '🤖 AI Assistant'}
                </span>
                <span className="message-time">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="message-content">
                {message.content}
              </div>
            </div>
          ))
        )}
        {isLoading && (
          <div className="message assistant loading">
            <div className="message-header">
              <span className="message-role">🤖 AI Assistant</span>
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="input-container">
        <textarea
          className="message-input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
          rows={3}
          disabled={isLoading}
        />
        <button 
          className="send-button"
          onClick={handleSendMessage}
          disabled={!inputMessage.trim() || isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  )
}

export default ConversationTab
