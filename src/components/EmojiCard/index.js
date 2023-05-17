// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiItem, onEmojiClick} = props
  const {id, emojiName, emojiUrl} = emojiItem

  const emojiClicked = () => {
    onEmojiClick(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" onClick={emojiClicked} className="emoji-btn-styles">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
