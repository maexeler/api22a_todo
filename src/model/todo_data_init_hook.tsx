import { useEffect } from "react"
import { useStoreActions } from "../store/StoreModel"

const useTodoInitDataHook = () => {
    const initData = useStoreActions(
        (actions) => {return actions.todoModel.initData}
    )
    useEffect(
        () => { initData()},
        // eslint-disable-next-line
        [] // Only run theeffect once
    )
}

export default useTodoInitDataHook