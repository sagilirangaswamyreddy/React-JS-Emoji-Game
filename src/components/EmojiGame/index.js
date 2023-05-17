/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLoseCard from '../WinOrLoseCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {
    tappedEmojisList: [],
    isGameFinish: false,
    score: 0,
    topScore: 0,
    isGameWin: false,
  }

  playAgain = () => {
    this.setState({
      tappedEmojisList: [],
      isGameFinish: false,
      score: 0,
      isGameWin: false,
    })
  }

  onEmojiClick = id => {
    const {tappedEmojisList} = this.state
    if (tappedEmojisList.includes(id)) {
      this.setState(prevState => ({
        isGameFinish: !prevState.isGameFinish,
      }))
    } else {
      this.setState(prevState => ({
        tappedEmojisList: [...prevState.tappedEmojisList, id],
        score: prevState.score + 1,
      }))
      const {score, topScore} = this.state
      if (score >= topScore) {
        this.setState(prevState => ({topScore: prevState.topScore + 1}))
      }
      if (score >= 11) {
        this.setState({isGameWin: true, isGameFinish: true})
      }
    }
  }

  render() {
    const {isGameFinish, score, topScore, isGameWin} = this.state
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    console.log(shuffledEmojisList)
    return (
      <div className="main-content">
        <nav className="nav-container">
          <NavBar
            isGameFinish={isGameFinish}
            score={score}
            topScore={topScore}
          />
        </nav>
        <div className="emoji-container">
          {!isGameFinish ? (
            <ul className="emoji-items-container">
              {shuffledEmojisList.map(emojiItem => (
                <EmojiCard
                  emojiItem={emojiItem}
                  key={emojiItem.id}
                  onEmojiClick={this.onEmojiClick}
                />
              ))}
            </ul>
          ) : (
            <div className="win-or-lose-card">
              <WinOrLoseCard
                isGameWin={isGameWin}
                score={score}
                playAgain={this.playAgain}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
