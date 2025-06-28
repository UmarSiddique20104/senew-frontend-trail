import React from "react"
// @ts-ignore
import trashIcon from "../../assets/Icon.png"
import { TableData } from "./types"

interface RowProps extends TableData {
    selected: boolean;
    onToggle: () => void;
}
const TableRow: React.FC<RowProps> = ({
    id,
    name,
    status,
    image,
    selected,
    onToggle,
}) => {
    const rowId = `row-${id}`
    console.log("Select Row Hain->", selected)

    return (<tr id={rowId} className=" hover:bg-gray-100 transition text-sm " >
        <td className="p-3 ">
            <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                    <input type="checkbox" checked={selected}
                        onChange={onToggle} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded  hover:shadow-md border border-[#CBCCCE] checked:bg-blue-600 checked:lue-600" id="check1" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </span>
                </label>
            </div>

        </td>
        <td className="p-3">
            <div className="flex items-center gap-3">
                <img src={image} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
                <span className="text-primary font-inter font-normal text-sm ">{name}</span>
            </div>
        </td>
        <td className="p-3  text-left">
            <span className="inline-flex font-inter items-center gap-2 bg-[#FFF4F2] text-secondary text-[14px] px-3 py-1 font-medium rounded-[4px] border border-border">
                <span className="block w-[6px] h-[6px]  bg-secondary rounded-full flex-shrink-0"></span>
                {status}
            </span>
        </td>
        <td className="p-3 text-left">
            <a href="#" className="text-action font-inter  font-medium">Action</a>
        </td>
        <td className="p-3">
            <button className="cursor-pointer">
                <img src={trashIcon} alt="avatar" className="" />
            </button>
        </td>
    </tr>
    )
}
export default TableRow
