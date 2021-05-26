import ShortcutManager from './ShortcutManager.js'

export default class Controls {

    constructor(ctx) {
        this.nodes = ctx.nodes;
        this.observer = ctx.observer;
        this.initialized = {}
    }

    initShortcuts() {
        if (!this.initialized.shortcuts) {
            this.initialized.shortcuts = true
            const shortcutManager = new ShortcutManager()
            shortcutManager.register(['AltLeft', 'KeyN'], () => {
                this.addActionShow()
            });
            shortcutManager.register(['Escape'], () => {
                this.addActionHide()
            });
        }
    }
    addAction() {
        const ref = this.nodes.add_form;
        ref.on('submit', () => {
            this.addActionSubmit(ref)
            return false;
        })
        ref.on('click', '.task_cancel', () => { 
            this.addActionHide() 
        })
        ref.on('input', '.task_name', () => {
            const val = ref.find('.task_name').val()
            this.autocompleteAction(val)
        })
    }
    addActionShow() {
        const ref = this.nodes.add_form;
        ref.slideDown();
        ref.get(0).reset();
        ref.find('input.task_name').focus();
        this.observer.emit('show_add_action')
    }
    addActionHide() {
        const ref = this.nodes.add_form;
        ref.slideUp();
    }
    addActionSubmit(form) {
        const data = new FormData(form.get(0))
        const values = Object.fromEntries(data.entries())
        const prep = {
            name: values.task_name,
            descr: values.task_descr,
            from: values.task_from,
            to: values.task_to,
        }
        this.observer.emit('new_task', prep)
    }
    autocompleteAction(val) {
       console.log(val)
    }

}