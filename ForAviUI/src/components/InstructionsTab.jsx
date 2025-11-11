import './InstructionsTab.css'

function InstructionsTab({ instructions, setInstructions }) {
  return (
    <div className="instructions-tab">
      <div className="instructions-container">
        <h2>System Instructions</h2>
        <p className="instructions-description">
          Define the AI's behavior, role, and guidelines. These instructions will be used 
          as the system prompt for all conversations.
        </p>
        <textarea
          className="instructions-textarea"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Enter system instructions here... 

For example:
- You are a helpful AI assistant that specializes in...
- Always provide detailed and accurate responses
- Use clear and concise language
- etc."
          rows={20}
        />
        <div className="instructions-info">
          <p>Characters: {instructions.length}</p>
          <p>These instructions will be applied to all new messages in the conversation.</p>
        </div>
      </div>
    </div>
  )
}

export default InstructionsTab
