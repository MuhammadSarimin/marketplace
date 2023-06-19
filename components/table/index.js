import { useState } from "react"
import propTypes from 'prop-types'

export function Th(props){
    const className = ["px-6 py-3 font-bold uppercase align-middle bg-transparent border-b border-collapse shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-80"]
    if (props.className != "") className.push(props.className)

    return (
        <th className={className.join(" ")}>{props.children}</th>
    )
}

export function Td(props) {
    const className = ["p-2 bg-transparent whitespace-nowrap shadow-transparent"]
    if (props.className != "") className.push(props.className)

    return (props.rowSpan !== undefined || props.rowSpan != 0) ?
        <td rowSpan={props.rowSpan} className={className.join(" ")}>{props.children}</td>:
        <td className={className.join(" ")}>{props.children}</td>
}

export function SearchType(props){

    const {nameType, setNameType} = props

    return (
        <div className="flex justify-end">
            <label className="inline-block py-2 pr-3 rounded-md text-sm font-medium leading-5 text-gray-700">
            <input 
                type="checkbox"
                value="name"
                checked={ (nameType === "name") ? true : false }
                onChange={() => { setNameType("name") }}
                className="form-checkbox h-4 w-4 rounded-full accent-blue-500 transition duration-150 ease-in-out"
            />
            <span className="ml-2">Name</span>
            </label>
            <label className="ml-4 inline-block py-2 px-3 rounded-md text-sm font-medium leading-5 text-gray-700">
            <input 
                type="checkbox"
                value="code"
                checked={(nameType === "code") ? true : false}
                onChange={() => { setNameType("code") }}
                className="form-checkbox h-4 w-4 rounded-full accent-blue-500 transition duration-150 ease-in-out"
            />
            <span className="ml-2">Code</span>
            </label>
        </div>
    )
}

SearchType.propTypes = {
    nameType : propTypes.string.isRequired,
    setNameType: propTypes.func.isRequired
}

export function TableSearch(props) {

    const [search, setSearch] = useState("")
    const handleKeyDown = (e) => {
        if(e.keyCode === 13) {
          submitSearch();
        }
      }
    
      const submitSearch = () => {
        if (props.onClick) props.onClick()
        else alert("no action")
      }

    return (
        <div className="relative w-7/12 rounded-md shadow-sm border border-blue-500 focus-within:border-cyan-500">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="icon-dashboard-16 mt-1"></i>
            </div>
            <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search"
                className="form-input w-full pl-10 py-2 rounded-md leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none" 
            />
        </div>
    )
}

TableSearch.propTypes = {
    onClick: propTypes.func
}

const Row = (props) => {
    return props.data.varians.map((v,i)=>{
        return (
        <tr key={i} className="border-b border-blue-500">
            <Td className="align-top text-center" >{i}</Td>
            <Td className="align-top" >{props.data.product}</Td>
            <Td className="align-midle">{v.varian_name}</Td>
            <Td className="align-midle">{v.stock}</Td>
        </tr>
        )
    })
}


export function Table(props) {

    const className = ["items-center w-full mb-0 align-top border-collapse text-slate-500"]
    if (props.className != "") className.push(props.className)

    return (
        <table className={className.join(" ")}>
            <thead className="align-bottom">
                <tr>
                    {props.data.header.map( 
                        (v) => (v === "No") ?
                        <Th className="text-left w-[100px]">{v}</Th>
                        :
                        <Th className="text-left">{v}</Th>
                      )}
                </tr>
            </thead>
            <tbody>
                {props.data.data.map((v,i)=>(<Row key={i} data={v}/>))}
            </tbody>
        </table>
    )
}