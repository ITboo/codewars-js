function undoRedo(object) {
    let lastActions = [];
    let undoneActions = [];

    return {
        set(key, value) {
            if (object.hasOwnProperty(key) === true) {
                lastActions.push(['edit', key, object[key], value])
            } else {
                lastActions.push(['set', key, value])
            }
            object[key] = value;
            undoneActions = [];
        },
        get(key) {
            return object[key];
        },
        del(key) {
            if (object[key]) {
                lastActions.push(['del', key, object[key]])
                delete object[key];
                undoneActions = [];
            }
        },
        undo() {
            if (lastActions.length === 0) {
                throw new Error('No actions in queue')
            }
            const popped = lastActions.pop()
            if (popped[0] === 'set') {
                delete object[popped[1]]
            } else if (popped[0] === 'edit') {
                object[popped[1]] = popped[2]
            } else if (popped[0] === 'del') {
                object[popped[1]] = popped[2]
            }
            undoneActions.push(popped)
        },
        redo() {
            if (undoneActions.length === 0) {
                throw new Error('No actions')
            }
            const popped = undoneActions.pop()
            if (popped[0] === 'set') {
                object[popped[1]] = popped[2]
            } else if (popped[0] === 'edit') {
                object[popped[1]] = popped[3]
            } else if (popped[0] === 'del') {
                delete object[popped[1]]

            }
            lastActions.push(popped)
        }
    }
}