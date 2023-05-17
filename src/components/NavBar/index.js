import './index.css'

const NavBar = props => {
  const {isGameFinish, score, topScore} = props
  return (
    <div className="navbar-content">
      <div className="logo-container">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div>
        {!isGameFinish ? (
          <div className="scores-container">
            <p className="scores-para">Score: {score}</p>
            <p className="scores-para">Top Score: {topScore}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}
export default NavBar
