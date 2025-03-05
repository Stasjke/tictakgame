import styles from './InformationLayout.module.css';

const InformationLayout = ({ status }) => {
	return <div className={styles.information}>{status}</div>;
};

export default InformationLayout;
