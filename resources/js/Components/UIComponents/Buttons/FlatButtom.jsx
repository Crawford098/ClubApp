export const FatButton = ({onClick, href}) => {

    return (
        <div className="flex justify-center items-center w-12 h-12 bg-pathfinder hover:bg-pathfinder-line rounded-full text-white">
            <a className={"text-center w-full hover:no-underline text-3xl hover:text-white"} href={href} onClick={onClick}>+</a>
        </div>
    )
}

FatButton.defaultProps = {
    onClick: () => {
    },
    href: 'javaScript:void(0);'
}
