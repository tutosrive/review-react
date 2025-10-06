export class User {
    id: string;
    name: string;
    age: number;
    email: string;
    isOnline: boolean;

    constructor(id?: string, name?: string, age?: number, email?: string, isOnline?: boolean) {
        this.id = id ?? '';
        this.name = name ?? 'user';
        this.age = age ?? -1;
        this.email = email ?? 'user@example.any';
        this.isOnline = isOnline ?? false;
    }
}
