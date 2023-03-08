import React, { FC } from 'react'
import '../../styles.css'

interface TableProps {
    rows: number[]
    columns: string[]
}

const Table: FC<TableProps> = ({ rows, columns }) => {
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