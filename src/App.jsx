import FieldContainer from './components/Field/FieldContainer';
import InformationContainer from './components/Information/InformationContainer';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(null));

	const checkWinner = (board) => {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	const isBoardFull = (board) => board.every((cell) => cell !== null);

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		const winner = checkWinner(newField);

		if (winner) {
			setIsGameEnded(true);
		} else if (isBoardFull(newField)) {
			setIsDraw(true);
			setIsGameEnded(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const restartGame = () => {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField(Array(9).fill(null));
	};

	return (
		<div className={styles.game}>
			<InformationContainer
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>
			<FieldContainer field={field} onCellClick={handleCellClick} />
			<button className={styles.restartButton} onClick={restartGame}>
				Начать заново
			</button>
		</div>
	);
}

export default App;
