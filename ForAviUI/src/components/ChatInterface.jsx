import { useState } from 'react'
import InstructionsTab from './InstructionsTab'
import ConversationTab from './ConversationTab'
import DetailsTab from './DetailsTab'
import './ChatInterface.css'

function ChatInterface() {
  const [activeTab, setActiveTab] = useState('conversation')
  const [instructions, setInstructions] = useState('')
  const [messages, setMessages] = useState([])
  const [conversationDetails, setConversationDetails] = useState({
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 2048
  })

  const addMessage = (message) => {
    setMessages(prev => [...prev, message])
  }

  return (
    <div className="chat-interface">
      <header className="chat-header">
        <h1>ForAvi - Collaborative Steered AI Interface</h1>
      </header>
      
      <div className="tab-navigation">
        <button 
          className={`tab-button ${activeTab === 'instructions' ? 'active' : ''}`}
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </button>
        <button 
          className={`tab-button ${activeTab === 'conversation' ? 'active' : ''}`}
          onClick={() => setActiveTab('conversation')}
        >
          Conversation
        </button>
        <button 
          className={`tab-button ${activeTab === 'details' ? 'active' : ''}`}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'instructions' && (
          <InstructionsTab 
            instructions={instructions}
            setInstructions={setInstructions}
          />
        )}
        {activeTab === 'conversation' && (
          <ConversationTab 
            messages={messages}
            addMessage={addMessage}
            instructions={instructions}
            conversationDetails={conversationDetails}
          />
        )}
        {activeTab === 'details' && (
          <DetailsTab 
            details={conversationDetails}
            setDetails={setConversationDetails}
            messages={messages}
          />
        )}
      </div>
    </div>
  )
}

export default ChatInterface
