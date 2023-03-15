import {observable, action, makeObservable} from 'mobx'
import {fetchList} from '../api/FetchList'

interface IListItems {
    id: string;
    name: string
}

class ListStore {
    list: Array<IListItems> = [];

    constructor(){
        makeObservable(this, {
            list: observable,
            loadList: action
        })
    }

    async loadList () {
        const list = await fetchList();
        this.list = list;
    }
}

export default ListStore;