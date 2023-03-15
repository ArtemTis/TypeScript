import { injectStores } from '@mobx-devtools/tools'

import inputStore from './inputStore'
import CheckboxStore from './store'

const checkboxStore = new CheckboxStore()

injectStores({
    inputStore, 
    checkboxStore
})

export {inputStore, checkboxStore}