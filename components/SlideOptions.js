import { useContext, useState } from 'react'
import Context from '../store/context';
import { Menu, Icon, Button } from 'antd';

// CSS Import 
import '../styles/SlideOptions.css'

const { SubMenu } = Menu;
const env_names = []
for (let i = 1; i < 16; i++) {
    env_names.push(`Ambiente ${i}`)
}

const SlideOptions = () => {
    const { state, actions } = useContext(Context)
    const options = ['Descripcion', 'Conexiones', 'Fuente', 'Campos']
    const handleClick = () => console.log("E")

    const createTable = param => async () => {
        let option = Object.values(param)
        const columns = [];
        const subdata = {};
        const data = [];


        if (Object.keys(param).toString() === options[0]) {
            const Data = state.data[option]
            Object.keys(Data).map(x => { columns.push({ title: x, dataIndex: x.toLowerCase() }) })
            await columns.shift()

            await columns.map(x => {
                subdata[x.dataIndex] = Data[x.title]
            })

            await Object.assign(subdata, { key: '1' })
            await data.push(subdata)

            await actions({ type: 'set-new-state', payload: { ...state, columns: columns, table_data: data } })


        }
    }

    return (
        <div className="slide-options-container">

            {
                env_names.map((x, i) =>
                    <Menu
                        onClick={handleClick}
                        style={{ width: 256 }}
                        defaultSelectedKeys={['1']}
                        //defaultOpenKeys={['sub1']}
                        mode="inline"
                        selectable="false"
                    >
                        <SubMenu
                            key={`sub${i + 1}`}
                            title={
                                <span>
                                    <Icon type="cloud-server" />
                                    <span>{x}</span>
                                </span>
                            }
                        >
                            {
                                options.map((y, j) =>
                                    <div style={{ width: '100%' }} className="d-flex justify-content-center">
                                        <div className="button-option-container">
                                            <Button onClick={createTable({ [y]: i })} key={j} block>{y}</Button>
                                        </div>
                                    </div>
                                )
                            }

                        </SubMenu>
                    </Menu>
                )
            }


        </div>
    )
}

export default SlideOptions