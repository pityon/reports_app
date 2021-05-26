export default class Observer {
    constructor() {
        this.events = {}
    }
    emit(name, data) {
        if (this.events[name]) {
            this.events[name](data)
        }
    }
    on(name, cb) {
        this.events[name] = cb;
    }
    off(name) {
        this.events[name] = null;
    }
}