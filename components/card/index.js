import Button from "../button";
import propTypes from 'prop-types'

export function ButtonCard(props){  

    const className = [props.className]

    if (props.imgPosition == "left") return (
        <Button 
            type="button"
            className="bg-white p-6 rounded-md flex justify-start items-center"
            onClick={props.onClick}
        >
            <img className="w-10 h-10" src={props.img} alt={props.children} />
            <h2 className="font-medium text-xl pl-4 ">{props.children}</h2>
        </Button>
    )

    return (
    <Button
        type="button"
        className="rounded-md border-transparent bg-white pt-8 pb-6 text-md font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={props.onClick}
    >
        <img className="w-16 h-16 m-auto" src={props.img} alt={props.children} />
        <h2 className="text-center font-medium mt-2">{props.children}</h2>
    </Button>
    )

}

ButtonCard.propTypes = {
    img: propTypes.string,
    imgPosition:propTypes.oneOf(["left", "center"]),
    onClick: propTypes.func,
}

export function Card(props) {

    const className = ["hover:border-2 hover:border-blue-500 w-full h-28 rounded-md text-center shadow-lg"]
    className.push(props.className)

    if (props.type === "button") 
    return(
        <Button 
            type={props.type}
            className={className.join(" ")}
            onClick={props.onClick}>
                <img className="w-8 h-8 m-auto" src={props.img} alt={props.children} />
                <h1 className="text-md font-medium mt-1">{props.children}</h1>
        </Button>
    );

    return (
        <Button 
            type={props.type}
            href={props.href}
            className={className.join(" ")}
            onClick={props.onClick}>
                <img className="w-8 h-8 m-auto" src={props.img} alt={props.children} />
                <h1 className="text-md font-medium mt-1">{props.children}</h1>
        </Button>
    );
}