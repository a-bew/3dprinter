"use client"
// DynamicTable.tsx
import React, { Fragment, useEffect, useState } from 'react';
import styles from './DynamicTable.module.scss'; // Import component-specific CSS
import { EmptyTableData, RowCell0, TableData, TableHead } from './UpdateComponents';
import { GrTableAdd } from 'react-icons/gr';
import { FcAddRow, FcDeleteRow } from 'react-icons/fc';

interface Product {
    name: string;
    pricePerTB: string;
    price: string;
    capacity: string;
    warranty: string;
    formFactor: string;
    technology: string;
    condition: string;
}

interface Props {
    products: any[];
    columns: string[];
}

const DynamicTable: React.FC<Props> = ({ products, columns }) => {
    const [expandedRow, setExpandedRow] = useState<number | null>(null);

    const toggleRow = (index: number) => {
        setExpandedRow(expandedRow === index ? null : index);
    };

    return (
        <div className={styles['table-container']}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <RowCell0 icon={GrTableAdd} onClick={() => {

                        }}
                            style={{ width: '5%' }}
                        />
                        {/* <th ></th> */}
                        {columns.map((column, index) => (
                            <TableHead key={index} style={{ width: `${(100 / columns.length) + 3}%` }} data={column} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <React.Fragment key={index}>
                            <tr onClick={() => toggleRow(index)} className={styles['clickable-row']}>


                                {/* <TableData data={product.name} />
                                <TableData data={product.pricePerTB} />
                                <TableData data={product.price} /> */}
                                {
                                    Object.entries(product).map(([key, value], index) => {
                                        if (index === 0) {
                                            return (<Fragment key={key}>
                                                <RowCell0 icon={FcDeleteRow} onClick={() => {

                                                }} />
                                                <TableData data={value} />
                                            </Fragment>)
                                        }
                                        return (<TableData key={key} data={value} />)
                                    })
                                }
                                {Array(columns.length - Object.entries(product).length).fill(0).map((_, index) => (<EmptyTableData key={index} />))}
                            </tr>
                            <tr>
                                <RowCell0 icon={FcAddRow} onClick={() => {

                                }} />
                                <td colSpan={columns.length} />
                                {/* FcAddColumn */}
                            </tr>

                            {expandedRow === index && (
                                <tr className={styles['expanded-row']}>
                                    <td colSpan={columns.length}>{/* Render expanded row data */}</td>
                                </tr>
                            )}
                            {/* Add New Row */}


                        </React.Fragment>
                    ))}


                </tbody>
            </table>
        </div>
    );
};

export default DynamicTable;