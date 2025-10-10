import { useEffect, useState, type FC } from 'react';
import { User } from '../models/User';
import UserCard from './UserCard';
import Loader from './Loader';

// Simulate query/fetch
function randomId(str: string) {
    return `${str}${crypto.randomUUID()}`;
}

function getUsersRandom() {
    const usersLocal = [];
    let flag = false;
    const names = ['Santiago', 'Andrés', 'Samuel', 'Nicolás', 'Antonio', 'Eduardo', 'Isabella', 'Luisa', 'Miguel'];

    for (let i = 0; i < names.length; i++) {
        flag = !flag;
        const idUser = randomId('user-');
        const age = parseInt(((Math.random() + 1) * 60).toString(), 10);

        const user = new User(idUser, names[i], age, `${names[i]}@gmail.com`, flag);
        usersLocal.push(user);
    }

    return usersLocal;
}

const UserCardContainer: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoadingContainer, setIsLoadingContainer] = useState<boolean>(true);

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
        const randomTimeWait: number = (Math.random() * (3 - 1) + 1) * 1000;

        const timeout = setTimeout(() => {
            // Get the users
            const usersGet: User[] = getUsersRandom();

            // Set the user obtained!
            setUsers(usersGet);
            console.log(randomTimeWait);

            setIsLoadingContainer(false);
        }, randomTimeWait);

        return () => clearTimeout(timeout);
    }, []);

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
