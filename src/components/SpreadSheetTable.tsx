import React from 'react';
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
} from '@tanstack/react-table';

type Person = {
    index: number,
    id: string,
    Job_Request: string,
    Status: string,
    role: string,
    Submitter: string,
    URL: string,
    Assigned: string,
    Priority: string,
    Due_Date: string,
    Est_Value: string,
};


const defaultData: Person[] = [
        { index: 1, id: '1', Job_Request: '123456', Status: 'In-process', role: 'Admin', Submitter: 'John Doe', URL: 'https://www.google.com', Assigned: 'Jane Smith', Priority: 'High', Due_Date: '2025-01-01', Est_Value: '6,200,000' },
        { index: 2, id: '2', Job_Request: '123457', Status: 'Need to start', role: 'Editor', Submitter: 'Jane Doe', URL: 'https://www.google.com', Assigned: 'John Smith', Priority: 'Medium', Due_Date: '2025-01-02', Est_Value: '1,200,000' },
        { index: 3, id: '3', Job_Request: '123458', Status: 'In-process', role: 'Viewer', Submitter: 'John Doe', URL: 'https://www.google.com', Assigned: 'Jane Smith', Priority: 'Low', Due_Date: '2025-01-03', Est_Value: '1,200,000' },
        { index: 4, id: '4', Job_Request: '123459', Status: 'Complete', role: 'Viewer', Submitter: 'John Doe', URL: 'https://www.google.com', Assigned: 'Jane Smith', Priority: 'Low', Due_Date: '2025-01-03', Est_Value: '1,200,000' },
        { index: 5, id: '5', Job_Request: '123460', Status: 'Blocked', role: 'Viewer', Submitter: 'John Doe', URL: 'https://www.google.com', Assigned: 'Jane Smith', Priority: 'Low', Due_Date: '2025-01-03', Est_Value: '1,200,000' },
        { index: 6, id: '6', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 7, id: '7', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 8, id: '8', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 9, id: '9', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 10, id: '10', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 11, id: '11', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 12, id: '12', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 13, id: '13', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 14, id: '14', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 15, id: '15', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 16, id: '16', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
        { index: 17, id: '17', Job_Request: '', Status: '', role: '', Submitter: '', URL: '', Assigned: '', Priority: '', Due_Date: '', Est_Value: '' },
];

const defaultColumns: ColumnDef<Person>[] = [
    {
        id: 'index',
        header: 'Index',
        accessorKey: 'index',
    },
    {
        id: 'Job_Request',
        header: 'Job Request',
        accessorKey: 'Job_Request',
    },
    {
        id: 'Status',
        header: 'Status',
        accessorKey: 'Status',
        cell: ({ row }) => {
            return <div className={`font-semibold text-[.75rem] text-center p-1.5 rounded-2xl ${row.original.Status === 'In-process' ? 'text-[#85650C] bg-[#FFF3D6]' : row.original.Status === 'Need to start' ? 'text-[#536074] bg-[#E2E8F0]' : row.original.Status === 'Complete' ? 'text-[#0A6E3D] bg-[#D3F2E3]' : row.original.Status === 'Blocked' ? 'text-[#C22219] bg-[#F8D7DA]' : ''}`}>{row.original.Status}</div>;
        },
    },
    {
        id: 'Submitter',
        header: 'Submitter',
        accessorKey: 'Submitter',
    },
    {
        id: 'URL',
        header: 'URL',
        accessorKey: 'URL',
    },
    {
        id: 'Assigned',
        header: 'Assigned',
        accessorKey: 'Assigned',
        
        

    },
    {
        id: 'Priority',
        header: 'Priority',
        accessorKey: 'Priority',
        
        cell: ({ row }) => {
            return <div className={`font-semibold text-center ${row.original.Priority === 'High' ? 'text-red-500' : row.original.Priority === 'Medium' ? 'text-yellow-500' : 'text-[#1A8CFF]'}`}>{row.original.Priority}</div>;
        },
    },
    {
        id: 'Due_Date',
        header: 'Due Date',
        accessorKey: 'Due_Date',
    },
    {
        id: 'Est_Value',
        header: 'Est. Value',
        accessorKey: 'Est_Value',
    },
];



export const SpreadsheetTable = () => {
    const table = useReactTable({
        data: defaultData,
        columns: defaultColumns,
        getRowId: (row) => row.id,
        enableSorting: true,
        enableHiding: true,
        enablePinning: true,
        enableRowSelection: true,
        getCoreRowModel: getCoreRowModel(),
        columnResizeMode: 'onChange',
    });

    return (
        <div className="overflow-auto">
        <table className="relative w-full border-collapse text-sm">
            <thead className="bg-gray-200">
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th
                                key={header.id}
                                style={{ width: header.getSize() }}
                                className={`relative group select-none ${header.id==='Assigned' ? 'bg-[#E8F0E9] text-[#666C66]' :
                                    header.id==='Priority' ? 'bg-[#EAE3FC] text-[#655C80]' :
                                    header.id==='Due_Date' ? 'bg-[#EAE3FC] text-[#655C80]' :
                                    header.id==='Est_Value' ? 'bg-[#FFE9E0] text-[#8C6C62]' :
                                    'bg-[#EEEEEE] text-[#757575]'} py-2 border-2 border-[#F6F6F6] text-center`}
                            >
                                {flexRender(header.column.columnDef.header, header.getContext())}

                                {header.column.getCanResize() && (
                                    <div
                                        onMouseDown={header.getResizeHandler()}
                                        onTouchStart={header.getResizeHandler()}
                                        className="absolute right-0 top-0 bottom-0 h-full w-1 cursor-col-resize active:bg-gray-300 active:h-screen"
                                    />
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                        {row.getVisibleCells().map((cell) => (
                            <td
                                key={cell.id}
                                contentEditable
                                suppressContentEditableWarning
                                className="px-4 py-2 border-2 border-[#F6F6F6] text-center"
                                onBlur={() => console.log(`Edited ${cell.column.id}`)}
                                onFocus={() => console.log(`Focused ${cell.column.id}`)}
                                style={{ width: cell.column.getSize() }}
                            >
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};
