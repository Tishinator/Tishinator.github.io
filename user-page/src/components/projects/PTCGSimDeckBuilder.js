import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import appImage from '../../assets/db2.PNG';
import styles from '../css/ProjectDetail.module.css';

function PTCGSimDeckBuilder() {
    const techStack = ['React', 'PokemonTCG.io API'];

    return (
        <div>
            <div className={styles.techStack}>
                {techStack.map(tech => (
                    <span key={tech} className={styles.techPill}>{tech}</span>
                ))}
            </div>

            <div className={styles.twoCol}>
                <div>
                    <div className={styles.section}>
                        <div className={styles.sectionLabel}>Summary</div>
                        <div className={styles.summaryText}>
                            <p>
                                The PTCG-Sim Deck Builder is an add-on to the fan-made Pokémon TCG
                                simulator <a href="https://ptcgsim.online/" target="_blank" rel="noopener noreferrer">ptcgsim.online</a>.
                                It was built to replace the clunky CSV-based deck creation workflow
                                with a clean, user-friendly interface.
                            </p>
                            <p>
                                After sharing the project with the PTCG-Sim creator, it was
                                integrated directly into the simulator and is now used by players
                                around the world.
                            </p>
                        </div>
                    </div>
                    <a
                        className={styles.liveBtn}
                        href="https://tishinator.github.io/PTCGDeckBuilder/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </div>

                <div className={styles.mediaWrapper} style={{ marginTop: 0 }}>
                    <img
                        src={appImage}
                        alt="PTCG-Sim Deck Builder screenshot"
                        className={styles.projectImage}
                    />
                </div>
            </div>
        </div>
    );
}

export default PTCGSimDeckBuilder;
