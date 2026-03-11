import appImage from '../../assets/DatasetGen.png';
import styles from '../css/ProjectDetail.module.css';

function DatasetGenerator() {
    const techStack = ['Python'];

    return (
        <div>
            <div className={styles.techStack}>
                {techStack.map(tech => (
                    <span key={tech} className={styles.techPill}>{tech}</span>
                ))}
            </div>

            <div className={styles.twoCol}>
                <div className={styles.section}>
                    <div className={styles.sectionLabel}>Summary</div>
                    <div className={styles.summaryText}>
                        <p>
                            DatasetGenerator.py applies image transformations — primarily rotations
                            along user-selected axes — to produce a large dataset from a single
                            source image. The user specifies the rotation range, and the script
                            estimates the output count and disk space before proceeding.
                        </p>
                        <p>
                            Generating rotational variants increases training data variability
                            without collecting new data, improving model robustness for machine
                            learning applications. Originally a college ML project, it has since
                            been adapted for other use cases.
                        </p>
                    </div>
                </div>

                <div className={styles.mediaWrapper} style={{ marginTop: 0 }}>
                    <img
                        src={appImage}
                        alt="Dataset Generator preview"
                        className={styles.projectImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default DatasetGenerator;
