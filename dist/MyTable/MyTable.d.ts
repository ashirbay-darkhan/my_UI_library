import React, { ReactNode } from 'react';
import './MyTable.css';
export interface MyTableProps {
    headers: string[];
    data: ReactNode[][];
}
declare const MyTable: React.FC<MyTableProps>;
export default MyTable;
