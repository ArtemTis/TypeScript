import {action, observable, makeObservable} from 'mobx'
import {Booking} from '../../types/types'

interface IForm {
    id: number;
    bookings: Array<Booking> []
}

class FormStore <IForm>{
    dataForm: Array<IForm> = [];

    constructor() {
        makeObservable(this,{
            dataForm: observable,
            create: action,
            close: action
        })
    }

    create () {

    }

    close () {

    }
}

export default FormStore