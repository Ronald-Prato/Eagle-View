import { useContext } from 'react'
import Context from '../../store/context';

const columns = [];
const subdata = {};
const data = [];


const ParseData = () => {

    const { state } = useContext(Context)

    static async function TableData() {
        const Data = state.data[props.option]
        Object.keys(Data).map(x => { columns.push({ title: x, dataIndex: x.toLowerCase() }) })

        await columns.shift()

        await columns.map(x => {
            subdata[x.dataIndex] = Data[x.title]
        })

        await Object.assign(subdata, { key: '1' })
        await data.push(subdata)


        await console.log("columns => ", columns)
        await console.log(data)

        await setShowingTable(true)
        return [columns, data]
    }

}

export { ParseData } 