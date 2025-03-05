import InformationLayout from './InformationLayout';

// const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
// 	let status;

// 	if (isDraw) {
// 		status = 'Ничья!';
// 	} else if (isGameEnded) {
// 		status = `Победил: ${currentPlayer === 'X' ? 'X' : '0'}!`;
// 	} else {
// 		status = `Ходит: ${currentPlayer}`;
// 	}

// 	return <InformationLayout status={status} />;
// };

const InformationContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
	const status = isDraw
		? 'Ничья!'
		: isGameEnded
		? `Победил: ${currentPlayer === 'X' ? 'X' : '0'}!`
		: `Ходит: ${currentPlayer}`;

	return <InformationLayout status={status} />;
};
export default InformationContainer;
