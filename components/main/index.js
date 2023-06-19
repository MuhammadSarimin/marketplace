export default function Main(props){
    return (
        <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out ml-68 rounded-xl">
            {props.children}
        </main>
    )
}