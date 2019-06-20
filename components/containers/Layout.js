import axios from 'axios';
import { useEffect, useContext } from 'react'
import Context from '../../store/context'
import MainScreen from '../views/MainScreen'


const url = "http://localhost:4042/data"

const Layout = () => {
    const { state, actions } = useContext(Context)
    const r = true;
    useEffect(async () => {
        const r = await axios.get(url).then(res => {
            actions({ type: 'set-new-state', payload: { ...state, data: res.data } })
        }).then(() => true)
    }, [])

    return (
        <div>
            <MainScreen />

        </div>
    )


}

export default Layout