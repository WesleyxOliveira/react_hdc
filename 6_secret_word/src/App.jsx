//CSS
import './App.css'

//REACT
import { userCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words'

//components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState('');
  const [pickedCategory, setPickedCategory] = useState('');
  const [letters, setPickedLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    //Pick a random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //Pick a random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    console.log(category);
    console.log(word);

    return { word, category };
  }

  //starts the secret word game
  const startGame = () => {
    //pick word and pick category
    const { word, category } = pickWordAndCategory();
    console.log(word, category);

    setGameStage(stages[1].name);

    //create an array of letters
    let wordLetters = word.split('')

    wordLetters = wordLetters.map((l) => l.toLowerCase());
    console.log(wordLetters);

    //fill states
    setPickedCategory(word);
    setPickedCategory(category);
    setPickedLetters(wordLetters);
  }

  //process the letter input
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //restarts the game
  const retry = () => {
    setGameStage(stages[1].name);
  }

  return (
    <div className='App'>
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={guesses}
      />}
      {gameStage === 'end' && <GameOver retry={retry} />}
    </div>
  )
}

export default App
