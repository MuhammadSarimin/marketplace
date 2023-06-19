import propTypes from 'prop-types'
import Button from "../button";

const Menu = (props) => {
    const className = ["py-2 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"]
    const icon = ["relative top-0 text-sm leading-normal"]

    if (props.active) className.push("bg-blue-500/13 rounded-lg font-semibold text-slate-700")
    icon.push(props.icon)

    return (
        <li className="mt-0.5 w-full">
            <Button type="link" className={className.join(" ")} href={props.href}>
                <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                <i className={icon.join(" ")}></i>
                </div>
                <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">{props.children}</span>
            </Button>
        </li>
    )
}

Menu.propTypes = {
    active: propTypes.bool,
    href: propTypes.string,
    icon: propTypes.string
}


export default function Aside(props) {

    const menus = [
        {href:"/my-market/dashboard", icon:"icon-dashboard-16", text:"Dashboard"},
        {href:"/my-market/products", icon:"icon-products-16", text:"Products"},
        {href:"/my-market/stock", icon:"icon-stock-16", text:"Stock"},
        {href:"/my-market/history", icon:"icon-history-16", text:"History"},
        {href:"/my-market/report", icon:"icon-report-16", text:"Report"}
    ]

    return (
        <aside className="fixed inset-y-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl max-w-64 ease-nav-brand z-990 xl:ml-6 rounded-xl xl:left-0 xl:translate-x-0" aria-expanded="false">
          <div className="h-19">
            <Button type="link" className="block px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700" href="/dashboard">
              <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Balqis Mart</span>
            </Button>
          </div>

          <hr className="h-px mt-0 mb-4 bg-gradient-to-r from-blue-500 to-transparent" />

          <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
            <ul className="flex flex-col pl-0 mb-0">

              {
                menus.map( (m, i) => (
                    (props.menu === m.text) ?
                    <Menu key={i} href={m.href} icon={m.icon} active>{m.text}</Menu> :
                    <Menu key={i} href={m.href} icon={m.icon}>{m.text}</Menu>
                 ))
              }

              <li className="w-full mt-4">
                <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">Account pages</h6>
              </li>

              <Menu href="" icon="icon-profile-16">Profile</Menu>
              <Menu href="" icon="icon-logout-16">Logout</Menu>
              <Menu href="" icon="icon-sign-in-16">Sign In</Menu>
              <Menu href="" icon="icon-sign-up-16">Sign Up</Menu>
            </ul>
          </div>

        </aside>
    )
}

Aside.propTypes = {
    menu: propTypes.string
}