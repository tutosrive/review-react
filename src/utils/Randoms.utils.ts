export default class RandomsUtils {
    constructor() {
        throw new Error("This class don't need a instance. Just call its methods");
    }

    static generateID(str?: string) {
        return `${str}${crypto.randomUUID()}`;
    }
}
