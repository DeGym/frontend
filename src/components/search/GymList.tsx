import React from 'react';
import Image from 'next/image';
import styles from '@/styles/components/search/GymList.module.css';

interface Gym {
    id: string;
    name: string;
    address: string;
    rating: number;
    image: string;
}

interface GymListProps {
    gyms: Gym[];
    onGymSelect: (gym: Gym) => void;
}

const GymList: React.FC<GymListProps> = ({ gyms, onGymSelect }) => {
    if (gyms.length === 0) {
        return <div className={styles.noGyms}>No gyms found</div>;
    }

    return (
        <div className={styles.gymList}>
            {gyms.map((gym) => (
                <div key={gym.id} className={styles.gymItem} onClick={() => onGymSelect(gym)}>
                    <Image src={gym.image} alt={gym.name} width={100} height={100} className={styles.gymImage} />
                    <div className={styles.gymInfo}>
                        <h3 className={styles.gymName}>{gym.name}</h3>
                        <p className={styles.gymAddress}>{gym.address}</p>
                        <div className={styles.gymRating}>Rating: {gym.rating}/5</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GymList;