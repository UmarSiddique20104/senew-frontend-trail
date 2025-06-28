import React, { useState } from "react"
import { TableData } from "./types"
// @ts-ignore
import avatar from "../../assets/Avatar.png"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"


const dummyData: TableData[] = [
    { id: 1, name: "Table Cell", status: "Status", image: avatar },
    { id: 2, name: "Table Cell", status: "Status", image: avatar },
    { id: 3, name: "Table Cell", status: "Status", image: avatar },
    { id: 4, name: "Table Cell", status: "Status", image: avatar },
    { id: 5, name: "Table Cell", status: "Status", image: avatar },
]

const Table = () => {
    const [selectRows, setSelectRows] = useState<Set<number>>(new Set());
    const allSelected = selectRows?.size === dummyData?.length;
    const toggleSelectAll = (checked: boolean) => {
        console.log("Checked->", checked)
        setSelectRows(
            checked ? new Set(dummyData?.map((r) => r.id)) : new Set()
        );
    };

    console.log("allSelected--->", allSelected)
    const toggleRow = (id: number) => {
        setSelectRows((prev) => {
            console.log("Preview->", prev)
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };
    return (
        <div className="overflow-x-auto bg-grey-400 w-full">
            <div className="w-full  rounded-lg shadow p-5">

                <table className="min-w-[520px]  w-full table-auto">
                    <TableHeader allSelected={allSelected} onSelectAll={toggleSelectAll} />
                    <tbody>
                        {dummyData?.map((row) => (
                            <TableRow key={row.id} {...row} selected={selectRows.has(row?.id)}
                                onToggle={() => toggleRow(row?.id)} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
