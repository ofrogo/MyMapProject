export default class StorageService {

    constructor() {
        this.map = new Map()
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    createId() {
        while (true) {
            let id = this.uuidv4();
            if (!this.map.has(id)) {
                return id;
            }
        }
    }

    add(x) {
        let id = this.createId();
        this.map.set(id, x);
        return id;
    }

    getById(id) {
        return this.map.get(id);
    }

    getAll() {
        return this.map.values();
    }

    updateById(id, value) {
        if (this.map.has(id) && value === Object(value)) {
            let oldValue = this.map.get(id);
            if ((JSON.stringify(Object.keys(this.map.get(id))) === JSON.stringify(Object.keys(value))) &&
                (oldValue.constructor === value.constructor)) {
                for (let field of Object.keys(this.map.get(id))) {
                    oldValue[field] = value[field];
                }
                return;
            }
        }

        console.log("Error during updating")
    }

    replaceById(id, value) {
        if (this.map.has(id)) {
            this.map.set(id, value);
            return;
        }

        console.log("Error during replacement")
    }

    deleteById(id) {
        return this.map.delete(id);
    }
}