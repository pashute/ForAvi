import './DetailsTab.css'

function DetailsTab({ details, setDetails, messages }) {
  const handleDetailChange = (field, value) => {
    setDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const totalTokensEstimate = messages.reduce((acc, msg) => {
    return acc + Math.ceil(msg.content.length / 4)
  }, 0)

  return (
    <div className="details-tab">
      <div className="details-container">
        <section className="details-section">
          <h2>Model Configuration</h2>
          <p className="section-description">
            Configure the AI model parameters for your conversation.
          </p>

          <div className="form-group">
            <label htmlFor="model">Model</label>
            <select
              id="model"
              value={details.model}
              onChange={(e) => handleDetailChange('model', e.target.value)}
              className="form-control"
            >
              <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
              <option value="gpt-4">GPT-4</option>
              <option value="gpt-4-turbo">GPT-4 Turbo</option>
              <option value="claude-3-opus">Claude 3 Opus</option>
              <option value="claude-3-sonnet">Claude 3 Sonnet</option>
            </select>
            <small className="form-help">
              Select the AI model to use for generating responses.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="temperature">
              Temperature: {details.temperature}
            </label>
            <input
              type="range"
              id="temperature"
              min="0"
              max="2"
              step="0.1"
              value={details.temperature}
              onChange={(e) => handleDetailChange('temperature', parseFloat(e.target.value))}
              className="form-control slider"
            />
            <small className="form-help">
              Higher values make output more random, lower values more focused and deterministic.
            </small>
          </div>

          <div className="form-group">
            <label htmlFor="maxTokens">
              Max Tokens: {details.maxTokens}
            </label>
            <input
              type="range"
              id="maxTokens"
              min="256"
              max="4096"
              step="256"
              value={details.maxTokens}
              onChange={(e) => handleDetailChange('maxTokens', parseInt(e.target.value))}
              className="form-control slider"
            />
            <small className="form-help">
              Maximum number of tokens to generate in the response.
            </small>
          </div>
        </section>

        <section className="details-section">
          <h2>Conversation Statistics</h2>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{messages.length}</div>
              <div className="stat-label">Total Messages</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">
                {messages.filter(m => m.role === 'user').length}
              </div>
              <div className="stat-label">User Messages</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">
                {messages.filter(m => m.role === 'assistant').length}
              </div>
              <div className="stat-label">AI Responses</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">~{totalTokensEstimate}</div>
              <div className="stat-label">Est. Tokens Used</div>
            </div>
          </div>
        </section>

        <section className="details-section">
          <h2>About</h2>
          <p>
            ForAvi is a collaborative steered AI interface that provides a unique 
            three-tab experience for interacting with AI models:
          </p>
          <ul className="feature-list">
            <li>
              <strong>Instructions Tab:</strong> Define system-level instructions 
              that guide the AI's behavior throughout the conversation.
            </li>
            <li>
              <strong>Conversation Tab:</strong> Engage in real-time chat with 
              the AI using the configured model and instructions.
            </li>
            <li>
              <strong>Details Tab:</strong> Configure model parameters and view 
              conversation statistics.
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default DetailsTab
