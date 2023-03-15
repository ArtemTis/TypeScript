import {observable} from 'mobx'

const inputStore = observable({
    value: "",
    changeValue (value : string) {
        this.value = value;
    }
})

export default inputStore;