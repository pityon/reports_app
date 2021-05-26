export default class Storage {

    constructor(key) {
        this.key = key
    }

    get struct() {
        let container = window.localStorage.getItem(this.key);
        console.log('bbb', container)
        if (!container) {
            container = JSON.stringify({});
            window.localStorage.setItem(this.key, container)
        }
        if (typeof container !== 'object') {
            container = JSON.parse(container);
        }
        return container
    }

    add(key, data) {
        const struct = this.struct
        struct[key] = data
        window.localStorage.setItem(this.key, struct)
        console.log(this.struct);
    }
    remove(key) {
        const struct = this.struct;
        struct[key] = null
        window.localStorage.setItem(this.key, struct);
    }

}