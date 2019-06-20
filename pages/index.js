import useGlobalState from '../store/useGlobalState'
import Table from '../components/Table'
import Layout from '../components/containers/Layout'
import Context from '../store/context'
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import axios from 'axios';
import { type } from 'os';

const Index = () => {
    const store = useGlobalState()



    return (
        <Context.Provider value={store}>
            <Layout />

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                * { font-family: 'Roboto', sans-serif;}     
            `}</style>
        </Context.Provider>
    )
}

export default Index


