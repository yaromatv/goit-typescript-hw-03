class Key {
    private readonly signature: number = Math.random();

    public getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    public getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(public key: Key) {}

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`Doors are open. Person is added to tenants list`);
        }
    }
    public abstract openDoor(key: Key): void;
}
class MyHouse extends House {
    public openDoor(key: Key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = !this.door;
            console.log(`Key signature mathes. Doors are open: ${this.door}`);
        } else {
            console.log("Key signature do not match");
        }
    }
}
const key = new Key();
key.getSignature();

const house = new MyHouse(key);

const person = new Person(key);
const person1 = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
house.comeIn(person1);
console.log(house);

export {};
