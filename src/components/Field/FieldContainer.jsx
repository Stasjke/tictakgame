import FieldLayout from './FieldLayout';
import PropTypes from 'prop-types';

const FieldContainer = ({ field, onCellClick }) => {
	return <FieldLayout field={field} onCellClick={onCellClick} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf(['X', '0', null])).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldContainer;
