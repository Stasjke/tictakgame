import InformationLayout from './InformationLayout';
import PropTypes from 'prop-types';
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

InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
};
export default InformationContainer;
