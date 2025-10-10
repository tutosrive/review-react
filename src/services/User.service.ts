import { User } from '../models/User';
import RandomsUtils from '../utils/Randoms.utils';

export default class UserService {
    users: User[];

    constructor() {
        this.users = [];
    }

    // Simulate first fetch USERS
    getUsersRandom() {
        let flag = false;
        const names = ['Santiago', 'Andrés', 'Samuel', 'Nicolás', 'Antonio', 'Eduardo', 'Isabella', 'Luisa', 'Miguel'];

        for (let i = 0; i < names.length; i++) {
            flag = !flag;
            const idUser = RandomsUtils.generateID('user-');
            const age = parseInt(((Math.random() + 1) * 60).toString(), 10);
            const userIndex = parseInt((Math.random() * (names.length - 1 - 0) + 0).toString());

            const user = new User(idUser, names[userIndex], age, `${names[userIndex]}@gmail.com`, flag);
            this.users.push(user);
        }
    }
}
