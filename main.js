import StorageService from './map.js';

const storage = new StorageService();

let id1 = storage.add({firstName: "fn", lastName: "ln"})
let id2 = storage.add({name: "name1"})

class cl1 {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }
}

let id3 = storage.add(new cl1("fn", "ln"))

console.log(storage.getAll())

console.log(storage.getById(id2))

storage.updateById(id1, new cl1("Daniil", "Shat"))

storage.updateById(id1, {firstName: "Daniil", lastName: "Shat"})
console.log(storage.getById(id1))

storage.replaceById(id2, {name: "Daniil", age: 15})
console.log(storage.getById(id2))

storage.deleteById(id3)
console.log(storage.getById(id3))
console.log(storage.getAll())