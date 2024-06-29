import React from 'react';
import styles from '../styles/components/MeetTheBrains.module.css';
import { FaLinkedin, FaDiscord, FaGithub, FaTelegram } from 'react-icons/fa';

const members = [
    {
        name: 'Thiago Martins',
        role: 'Lead Developer',
        image: 'https://avatars.githubusercontent.com/u/71234183?v=4',
        description: 'Thiago is the mastermind behind DeGym\'s architecture and code. He specializes in blockchain development and smart contract security.',
        social: {
            linkedin: 'https://www.linkedin.com/in/0xthiagomartins/',
            discord: 'https://discord.com/users/0xthiagomartins',
            github: 'https://github.com/0xthiagomartins',
            telegram: 'https://t.me/thiagofmartins'
        }
    },
    {
        name: 'Maria Souza',
        role: 'Frontend Developer',
        image: 'TaraPunk1631.png',
        description: 'Maria is responsible for the beautiful and intuitive interfaces of DeGym. She is an expert in React and UX/UI design.',
        social: {
            linkedin: 'https://www.linkedin.com/in/0xthiagomartins/',
            discord: 'https://discord.com/users/0xthiagomartins',
            github: 'https://github.com/0xthiagomartins',
            telegram: 'https://t.me/thiagofmartins'
        }
    },
    {
        name: 'Lucas Silva',
        role: 'Backend Developer',
        image: 'TaraPunk1631.png',
        description: 'Lucas handles the server-side logic and integration of DeGym. He ensures the application runs smoothly and efficiently.',
        social: {
            linkedin: 'https://www.linkedin.com/in/0xthiagomartins/',
            discord: 'https://discord.com/users/0xthiagomartins',
            github: 'https://github.com/0xthiagomartins',
            telegram: 'https://t.me/thiagofmartins'
        }
    },
    {
        name: 'Ana Pereira',
        role: 'Blockchain Specialist',
        image: 'TaraPunk1631.png',
        description: 'Ana focuses on smart contract development and blockchain technology, making sure DeGym leverages the full potential of decentralized technology.',
        social: {
            linkedin: 'https://www.linkedin.com/in/0xthiagomartins/',
            discord: 'https://discord.com/users/0xthiagomartins',
            github: 'https://github.com/0xthiagomartins',
            telegram: 'https://t.me/thiagofmartins'
        }
    },
    {
        name: 'Rafael Costa',
        role: 'Project Manager',
        image: 'TaraPunk1631.png',
        description: 'Rafael oversees the project\'s progress and ensures that all team members are aligned with DeGym\'s goals and timelines.',
        social: {
            linkedin: 'https://www.linkedin.com/in/0xthiagomartins/',
            discord: 'https://discord.com/users/0xthiagomartins',
            github: 'https://github.com/0xthiagomartins',
            telegram: 'https://t.me/thiagofmartins'
        }
    }
];

const MeetTheBrains = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Meet the Brains behind DeGym</h2>
            <div className={styles.members}>
                {members.map((member, index) => (
                    <div key={index} className={styles.member}>
                        <img src={member.image} alt={member.name} className={styles.memberImage} />
                        <div className={styles.memberName}>{member.name}</div>
                        <div className={styles.memberRole}>{member.role}</div>
                        <div className={styles.memberDescription}>{member.description}</div>
                        <div className={styles.socialLinks}>
                            {member.social.linkedin && (
                                <a href={member.social.linkedin} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </a>
                            )}
                            {member.social.discord && (
                                <a href={member.social.discord} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <FaDiscord />
                                </a>
                            )}
                            {member.social.github && (
                                <a href={member.social.github} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            )}
                            {member.social.telegram && (
                                <a href={member.social.telegram} className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                                    <FaTelegram />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetTheBrains;
