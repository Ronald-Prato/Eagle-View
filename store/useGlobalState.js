import { useState } from 'react'

const State = {
    data: [],
    columns: [],
    table_data: []
}

const useGlobalState = () => {
    const [state, setState] = useState(State)

    const actions = action => {
        const { type, payload } = action

        switch (type) {
            case "set-new-state": { return setState(payload) }
            case "check-state": { console.log(state) }
            default: return state;
        }
    }
    return { state, actions }
}

export default useGlobalState