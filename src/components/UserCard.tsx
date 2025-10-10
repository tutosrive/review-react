import type { FC } from 'react';

interface UserCardProps {
    name: string;
    age: number;
    email: string;
    isOnline: boolean;
    changeIsOnline: () => void;
}

const UserCard: FC<UserCardProps> = ({ name, age, email, isOnline, changeIsOnline }: UserCardProps) => {
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
                <div className={`${classOnline}`}></div>
                <div className='user-card-footer'>
                    <button type='button' onClick={changeIsOnline}>
                        {textOnline}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
