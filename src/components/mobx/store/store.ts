import { action, makeObservable, observable } from 'mobx'

// const checkboxStore = observable({
//     checked: false,
//     handlerCheck () {
//         this.checked = !this.checked;
//     }
// })

class CheckboxStore {
    checked: boolean = false;

    constructor() {
        makeObservable(this, {
            checked: observable,
            handlerCheck: action
        })
    }

    handlerCheck() {
        this.checked = !this.checked;
    }
}

export default CheckboxStore;