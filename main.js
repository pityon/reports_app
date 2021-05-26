import Observer from './Observer.js'
import TaskManager from './TaskManager.js'
import UI from './UI.js'
import Controls from './Controls.js'

const taskManager = new TaskManager()
const observer = new Observer()

const context = {
    observer: observer,
    nodes: {
        add_form: $('.form-add'),
    }
}
const ui = new UI(context)
const controls = new Controls(context)

ui.addView().then(() => {
    controls.addAction()
})
ui.listView(taskManager.projects)


controls.initShortcuts()

observer.on('show_add_action', (data) => {
    context.nodes.add_form.find('.task_from').val(taskManager.internalTimer)
    context.nodes.add_form.find('.task_to').val(taskManager.timestamp())
})
observer.on('new_task', (data) => {
    taskManager.add(data)
})
console.log(taskManager.tasks.struct)