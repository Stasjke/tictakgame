import styles from './InformationLayout.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({ status }) => {
	return <div className={styles.information}>{status}</div>;
};

InformationLayout.propTypes = {
	status: PropTypes.string.isRequired,
};
export default InformationLayout;
