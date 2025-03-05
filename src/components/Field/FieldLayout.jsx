import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.board}>
			{field &&
				field.map((value, index) => (
					<button
						key={index}
						className={styles.cell}
						onClick={() => onCellClick(index)}
					>
						{value}
					</button>
				))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['X', '0', null])).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
