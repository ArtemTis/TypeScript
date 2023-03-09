import React, { FC, useState, useEffect } from 'react'
import '../../styles.css'
import { ITable } from '../../types/types'

interface TableProps<ITable> {
    rows: number[]
    columns: string[]
    rowsCols: ITable
}

const Table: FC<TableProps<ITable>> = ({ rows, columns, rowsCols }) => {

    const [product, setProduct] = React.useState<ITable>(rowsCols);

    console.log(product);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row}</td>
                        {columns.map((column, index) => (
                            <th key={index}></th>
                        ))}
                    </tr>
                ))}

            </tbody>
        </table>
    )
}

export default Table