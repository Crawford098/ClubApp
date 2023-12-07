import {BsGear} from "react-icons/bs";

export const UIIconButton = ({icon}) => {

    return(
        <div className="border rounded-md w-10 h-10 mx-2 flex justify-center items-center hover:cursor-pointer hover:shadow hover:shadow-white">
            <span>{icon}</span>
        </div>
    )
}

UIIconButton.defaultProps = {
    icon: <BsGear/>
}
