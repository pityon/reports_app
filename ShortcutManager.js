export default class ShortcutManager {      
    constructor() {
        this.actions = {};
        this.pressed = new Set();
        $(document).on('keydown', ({code} = e) => {
            if (code) {
                if (!this.pressed.has(code)) {
                    this.pressed.add(code) 
                    this.process()
                }
            }
        })
        $(document).on('keyup', ({code} = e) => {
            if (code) {
                if (this.pressed.has(code)) {
                    this.pressed.delete(code) 
                    this.process()
                }
            }
        })
    }

    register(inputArray, callback) {
        const key = inputArray.join('+');
        this.actions[key] = {
            inputArray: inputArray,
            callback: callback,
        };
    }
    unregister(inputArray) {
        const key = inputArray.join('+');
        this.actions[key] = {}
    }

    process() {
        for (const [key, value] of Object.entries(this.actions)) {
            const keys = value.inputArray
            let valid = true;
            keys.forEach(keyCode => {
                if (!this.pressed.has(keyCode)) {
                    valid = false;
                    return;
                }
            });
            if (valid) {
                value.callback()
            }
        }
    }
}