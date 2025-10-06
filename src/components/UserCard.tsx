import type { FC } from 'react';

interface UserCardProps {
    name: string;
    age: number;
    email: string;
    isOnline: boolean;
}

const UserCard: FC<UserCardProps> = ({ name, age, email, isOnline }: UserCardProps) => {
    let classOnline = 'circle-red';
    let textOnline = 'Offline';

    if (isOnline === true) {
        classOnline = 'circle-green';
        textOnline = 'Online';
    }

    return (
        <div className='user-card'>
            <h2>{name}</h2>
            <div className='user-card-body'>
                <p>{age}</p>
                <p>{email}</p>
                <div className={`${classOnline}`}>
                    <p>{textOnline}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
