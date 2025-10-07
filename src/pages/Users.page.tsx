import { useState, useEffect } from 'react';
import { User } from '../models/User';
import UserCard from '../components/UserCard';
import SimpleNav from '../components/SimpleNav';

function randomId(str: string) {
    return `${str}${(Math.random() + 1) * 40}`;
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
    const [users, setUsers] = useState<User[]>([]);

    const updateUsers = (usersObtained: User[]) => {
        console.log(usersObtained);

        // Set the new users
        setUsers(usersObtained);
    };

    useEffect(() => {
        // Simluate request
        const timeout = setTimeout(() => {
            const usersObtained: User[] = getUsersRandom();

            updateUsers(usersObtained);

            // "remove" timeout
            clearTimeout(timeout);
        }, 1000);

        // Load one time and when change "users"
    }, []);

    return (
        <div className='container page users-page'>
            <SimpleNav />

            {/* Make a map from users */}
            {users.map((user) => {
                return <UserCard idUser={user.id} age={user.age} email={user.email} isOnline={user.isOnline} name={user.name} key={user.id} />;
            })}
        </div>
    );
}
