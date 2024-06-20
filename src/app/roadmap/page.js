import Head from 'next/head';
import styles from '../../styles/pages/RoadMap.module.css';

const phases = [
    {
        title: "Concept & Planning",
        description: "Define the project vision, scope, and key objectives. Engage stakeholders and outline the initial requirements."
    },
    {
        title: "Development & Testing",
        description: "Develop the initial set of features and integrate essential technologies. Begin rigorous testing phases to ensure stability and performance."
    },
    {
        title: "Launch",
        description: "Deploy the project to production. Monitor the launch for any immediate issues and engage with early adopters for feedback."
    },
    {
        title: "Expansion",
        description: "Expand the project's market reach by introducing more features, increasing marketing efforts, and scaling the infrastructure."
    },
    {
        title: "Scaling and Enhancement",
        description: "Scale the platform to support a larger user base, improve system architecture for efficiency, and add advanced features based on user feedback."
    },
    {
        title: "Future Innovations",
        description: "Continuously innovate and update the platform with new technologies and features to stay ahead in the market. Focus on sustainable growth and user engagement."
    }
];

export default function RoadMap() {
    return (
        <>
            <Head>
                <title>RoadMap - DeGym</title>
            </Head>
            <main className={styles.main}>
                <div className={styles.roadmapContainer}>
                    <h1 className={styles.title}>Project Roadmap</h1>
                    <div className={styles.timeline}>
                        {phases.map((phase, index) => (
                            <div key={index} className={styles.phase}>
                                <div className={styles.phaseContent}>
                                    <h2>{phase.title}</h2>
                                    <p>{phase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}
