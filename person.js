// let's create an object literal that represents a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Howday! How do you like my name? It's ${this.name}`);
    }
}
// hey! let's export the object now:
module.exports = Person;
