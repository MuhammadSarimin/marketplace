// import propTypes from 'prop-types'

export function ScanInput(props){

    return (
        <div className="relative mt-1 m-auto">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img className="w-14 h-14" src="/icon/scan.svg" alt="Scan Logo" />
            </div>
            <input type="text" className="rounded-lg text-2xl p-7 pl-24 w-full focus:outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-200" placeholder="Scan something ..." />
        </div>
    )
}

export function Scan(props) {

    const className = ["rounded-lg shadow-lg text-lg p-2 pl-16 w-full hover:border-sky-200 hover:ring-2 hover:ring-sky-200 outline-none focus:border-sky-200 focus:ring-2 focus:ring-sky-200"]

    className.push(props.className)

    return (
        <div className="relative">
            <div className="flex absolute top-6 left-0 items-center pl-3 pointer-events-none">
                <img className="w-8 h-8" src="/icon/scan.svg" alt="Scan Logo" />
            </div>
            <input type="text" className={className.join(" ")} placeholder="Scan to add product" />
        </div>
    )
}