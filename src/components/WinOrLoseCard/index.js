// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isGameWin, score, playAgain} = props

  const onPlayAgain = () => {
    playAgain()
  }

  return (
    <div>
      {isGameWin ? (
        <div className="win-lose-card">
          <div className="content-win-or-lose">
            <h1 className="description">You Won</h1>
            <p className="description">Best Score</p>
            <p className="score-text">12/12</p>
            <button type="button" className="play-button" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="win-lose-image"
          />
        </div>
      ) : (
        <div className="win-lose-card">
          <div className="content-win-or-lose">
            <h1 className="description">You Lose</h1>
            <p className="description">Score</p>
            <p className="score-text">{score}/12</p>
            <button type="button" className="play-button" onClick={onPlayAgain}>
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="win-lose-image"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
