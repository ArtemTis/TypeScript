import { injectStores } from '@mobx-devtools/tools'

import inputStore from './inputStore'
import CheckboxStore from './store'
import ListStore from './ListStore'

const checkboxStore = new CheckboxStore()
const listStore = new ListStore()

injectStores({
    inputStore, 
    checkboxStore,
    listStore
})

export {inputStore, checkboxStore, listStore}