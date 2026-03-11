import vid from '../../assets/videos/socialsaver_demo.mp4';
import styles from '../css/ProjectDetail.module.css';

function SocialSaver() {
    const techStack = ['React', 'Django', 'Python', 'Facebook Graph API'];

    return (
        <div>
            <div className={styles.techStack}>
                {techStack.map(tech => (
                    <span key={tech} className={styles.techPill}>{tech}</span>
                ))}
            </div>

            <div className={styles.section}>
                <div className={styles.sectionLabel}>Summary</div>
                <div className={styles.summaryText}>
                    <p>
                        Social Saver was my first attempt at creating a React-based application.
                        Born out of a desire to separate myself from Facebook, I built it to
                        provide a way to view and download photos directly from the platform.
                    </p>
                    <p>
                        Unfortunately, due to restrictions on the Facebook Graph API, I was
                        unable to publish this application publicly. A demo is shown below.
                    </p>
                </div>
            </div>

            <div className={styles.mediaWrapper}>
                <video className={styles.projectVideo} controls>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default SocialSaver;
