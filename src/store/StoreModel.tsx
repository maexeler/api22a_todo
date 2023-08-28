import { createStore, createTypedHooks } from "easy-peasy";
import TodoModel, { todoModel } from "../model/TodoModel";

interface StoreModel {
    todoModel: TodoModel
    // userModel: UserModel etc.
}

const store = createStore<StoreModel>({
    todoModel: todoModel
})

export default store
    
const {
    useStoreActions,
    useStoreState,
    useStoreDispatch,
} = createTypedHooks<StoreModel>()

export {
    useStoreActions,
    useStoreState,
    useStoreDispatch,
}
