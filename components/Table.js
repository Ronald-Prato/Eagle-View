import { useContext, useEffect, useState } from 'react'
import Context from '../store/context'
import useGlobalState from '../store/useGlobalState';
import '../styles/Table.css'
import { Table } from 'antd'



const SingleTable = props => {
    const { state, actions } = useContext(Context);

    return (
        <div className="table-container">
            <Table className="table" columns={state.columns} dataSource={state.table_data} />
        </div>
    )
}


export default SingleTable