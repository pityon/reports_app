import Storage from './Storage.js'

export default class TaskManager {

    constructor() {
        this.tasks = new Storage('projects');
        var date = new Date();
        date.setHours(7, 0, 0);
        this.internalTimer = this.timestamp(date);
    }

    timestamp(d=null) {
        if (d==null) {
            d = new Date();
        }
        const hh = ('0' + d.getHours()).slice(-2)
        const mm = ('0' + d.getMinutes()).slice(-2)
        return hh + ':' + mm;
    }

    add(data) {
        const param = {
            project: data.name,
            descr: data.descr,
            from: data.from,
            to: data.to,
        };
        this.tasks.add(data.name, param)
    }

}