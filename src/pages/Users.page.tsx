import { useState, useEffect } from 'react';
import { User } from '../models/User';
import UserCard from '../components/UserCard';
import SimpleNav from '../components/SimpleNav';
import Loader from '../components/Loader';
import UserCardContainer from '../components/UserCardContainer';

function randomId(str: string) {
    return `${str}${parseInt(((Math.random() + 1) * 90000).toString(), 16)}`;
}

function getUsersRandom() {
    const usersLocal = [];
    let flag = false;
    const names = ['Santiago', 'Andrés', 'Samuel', 'Nicolás', 'Antonio'];

    for (let i = 0; i < 5; i++) {
        flag = !flag;
        const idUser = randomId('user-');
        const age = parseInt(((Math.random() + 1) * 60).toString(), 10);

        const user = new User(idUser, names[i], age, `${names[i]}@gmail.com`, flag);
        usersLocal.push(user);
    }

    return usersLocal;
}

export default function UserPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<User[]>([]);

    const updateUsers = (usersObtained: User[]) => {
        setUsers(usersObtained);
    };

    const handleChangeOnline = (id: string): void => {
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
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        // Simluate request
        const timeout = setTimeout(() => {
            const usersObtained: User[] = getUsersRandom();

            updateUsers(usersObtained);
            // "remove" timeout
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='container page users-page'>
            <SimpleNav />

            {loading === true ? (
                <Loader />
            ) : (
                <div id='users-cards'>
                    {users.map((user) => {
                        return <UserCard age={user.age} email={user.email} isOnline={user.isOnline} name={user.name} key={user.id} changeIsOnline={() => handleChangeOnline(user.id)} />;
                    })}

                    {<UserCardContainer />}
                </div>
            )}
        </div>
    );
}
