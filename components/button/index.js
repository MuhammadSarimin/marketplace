import Link from 'next/link'
import propTypes from 'prop-types'

export default function Button(props) {

    const className = [props.className]

    const onClick = () => {
        if(props.onClick) props.onClick()
    }

    if (props.isDisabled || props.isLoading) {
        if (props.isDisabled) className.push("disabled")
        return (
            <span
                className={className.join(" ")}
                style={props.style}
            >
                {props.isLoading ? (
                    <span>belum di buat loading nya</span>
                ) : (
                    props.children
                )}
            </span>
        )
    }

    if(props.type === "link") {
        if(props.isExternal){
            return (
                <a
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target === "_blank" ? "_blank" : undefined}
                    rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <Link
                    href={props.href}
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onClick}
                >
                    {props.children}
                </Link>
            )
        }
    }

    return (
        <button
            className={className.join(" ")}
            style={props.style}
            onClick={onClick}
        >
            {props.children}
        </button>
      )
}

Button.propTypes = {
    type:propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    href: propTypes.string,
    target: propTypes.string,
    className: propTypes.string,
    isExternal: propTypes.bool,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}