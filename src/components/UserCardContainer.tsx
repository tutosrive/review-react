import { useEffect, useState, type FC } from 'react';
import { User } from '../models/User';
import UserCard from './UserCard';
import Loader from './Loader';
import UserService from '../services/User.service';

const UserCardContainer: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoadingContainer, setIsLoadingContainer] = useState<boolean>(true);

    const [service, setService] = useState<UserService>();

    const handleChangeOnline = (id: string) => {
        setUsers((prevUsers) => {
            return prevUsers.map((user) => {
                if (user.id === id) {
                    return { ...user, isOnline: !user.isOnline };
                }
                return user;
            });
        });
    };
    useEffect(() => {
        setService(new UserService());
    }, []);

    useEffect(() => {
        const randomTimeWait: number = (Math.random() * (3 - 1) + 1) * 1000;
        service?.getUsersRandom();

        const timeout = setTimeout(() => {
            // Get the users
            const usersGet: User[] | undefined = service?.users;

            // Set the user obtained!
            if (usersGet) {
                setUsers(usersGet);
            }

            setIsLoadingContainer(false);
        }, randomTimeWait);

        return () => clearTimeout(timeout);
    }, [service, service?.users]);

    return (
        <>
            {isLoadingContainer === true ? (
                <Loader />
            ) : (
                <div id='users-cards-container'>
                    {users.map((user) => {
                        return <UserCard age={user.age} changeIsOnline={() => handleChangeOnline(user.id)} email={user.email} isOnline={user.isOnline} name={user.name} key={`${user.id}`} />;
                    })}
                </div>
            )}
        </>
    );
};

export default UserCardContainer;
