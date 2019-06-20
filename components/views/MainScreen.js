import { useContext, useState } from 'react'
import Context from '../../store/context';
import '../../styles/MainScreen.css'


// Import Components  
import SingleTable from '../Table'
import SlideOptios from '../SlideOptions'


const MainScreen = () => {
    const { state, actions } = useContext(Context)
    const [currentId, showId] = useState(false)


    return (
        <div className="main-screen-container">
            <SlideOptios />
            {state.option_to_load !== null ? <SingleTable option={state.option_to_load} /> : <div />}
        </div>
    )
}


export default MainScreen