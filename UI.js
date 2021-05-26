export default class UI {

    constructor(context) {
        this.context = context;
    }

    addView() {
        return new Promise((resolve, reject) => {
            const ref = this.context.nodes.add_form;
            ref.html(
                `<input class="task_name" type="text" name="task_name" value="" placeholder="Task name" required>
                <input class="task_descr" type="text" name="task_descr" value="" placeholder="Task description">
                <input class="task_from" type="text" name="task_from" value="" placeholder="Time start">
                <input class="task_to" type="text" name="task_to" value="" placeholder="Time end">
                <input type="submit" value="Save">
                <button type="button" class="task_cancel">Cancel</button>`
            )
            resolve();
        })
    }

    listView(projects) {
        return new Promise((resolve, reject) => {
            const list = $(`<ul class="list"></ul>`);
            $('aside').html('').append(list)
            if (projects) {
                console.log('projects', projects)
                // for (const [key, project] of Object.entries(projects)) {
                //     list.append(`<li>${project.name}</li>`)
                // }
            }
            resolve();
        })
    }

}