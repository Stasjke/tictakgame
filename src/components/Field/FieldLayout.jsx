import styles from './FieldLayout.module.css';

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

export default FieldLayout;
