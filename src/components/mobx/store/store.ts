import { injectStores } from "@mobx-devtools/tools";
import FormStore from "../FormStore";

const formStore = new FormStore();

injectStores({
    formStore
})

export {formStore}