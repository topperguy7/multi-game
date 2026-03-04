import { useState } from 'react'
import Hero from './components/Hero'
import Game1 from './components/Tictoe'
import Game2 from './components/Game2'
import Game3 from './components/Game3'

function App() {

  const [activeGame, setActiveGame] = useState("Hero");

  const games = {
    Hero : Hero,
    Game1 : Game1,
    Game2 : Game2,
    Game3 : Game3
  };

  const ActiveComponent = games[activeGame];
  console.log(ActiveComponent);

  return (
    <>
      <div className='content-body'>
        <div className='navbar'>
            <div className='navbar-top'>
              <h1 onClick={() => setActiveGame("Hero")}>Yoo!Gamer</h1>
            </div>
            <div className='navbar-bot'>
              <h1 onClick={() => setActiveGame("Game1")}>Tic-Tac-Toe</h1>
              <h1 onClick={() => setActiveGame("Game2")}>Game-2</h1>
              <h1 onClick={() => setActiveGame("Game3")}>Game-3</h1>
            </div>
        </div>

        <ActiveComponent/>
      </div>
    </>
  )
}

export default App;