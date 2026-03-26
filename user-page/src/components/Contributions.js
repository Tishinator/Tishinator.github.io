import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import contributionsData from '../data/json/contributions.json';
import styles from './css/Contributions.module.css';

function useRepoData(fullName) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/${fullName}`)
            .then(r => r.ok ? r.json() : null)
            .then(d => d && setData(d))
            .catch(() => {});
    }, [fullName]);

    return data;
}

function ContributionCard({ contribution }) {
    const repo = useRepoData(contribution.repo);
    const [owner, name] = contribution.repo.split('/');

    const description = repo?.description ?? null;
    const stars = repo?.stargazers_count ?? null;
    const forks = repo?.forks_count ?? null;
    const language = repo?.language ?? null;
    const ownerAvatar = repo?.owner?.avatar_url ?? null;

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.repoIdentity}>
                    {ownerAvatar && (
                        <img src={ownerAvatar} alt={owner} className={styles.ownerAvatar} />
                    )}
                    <div className={styles.repoName}>
                        <span className={styles.repoOwner}>{owner}</span>
                        <span className={styles.repoSep}>/</span>
                        <span className={styles.repoRepo}>{name}</span>
                    </div>
                </div>
                <div className={styles.repoStats}>
                    {language && (
                        <span className={styles.langBadge}>{language}</span>
                    )}
                    {stars !== null && (
                        <span className={styles.stat}>
                            <FontAwesomeIcon icon={faStar} /> {stars}
                        </span>
                    )}
                    {forks !== null && (
                        <span className={styles.stat}>
                            <FontAwesomeIcon icon={faCodeFork} /> {forks}
                        </span>
                    )}
                </div>
            </div>

            {description && (
                <p className={styles.repoDescription}>{description}</p>
            )}

            <div className={styles.contributionBlock}>
                <span className={styles.contributionLabel}>My contribution</span>
                <p className={styles.contributionText}>{contribution.summary}</p>
            </div>

            <div className={styles.cardFooter}>
                <a
                    href={contribution.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                >
                    <FontAwesomeIcon icon={faGithub} /> View Repo
                </a>
                {contribution.live && (
                    <a
                        href={contribution.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                    >
                        Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                )}
            </div>
        </div>
    );
}

function Contributions() {
    return (
        <Container>
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Open Source</h2>
                <div className={styles.sectionDivider} />
            </div>
            <div className={styles.cardList}>
                {contributionsData.contributions.map((c, i) => (
                    <ContributionCard key={i} contribution={c} />
                ))}
            </div>
        </Container>
    );
}

export default Contributions;
