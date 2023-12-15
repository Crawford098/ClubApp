import {BsGear} from "react-icons/bs";
import { router } from '@inertiajs/react';

export const UIIconButton = ({icon, routeName}) => {
    const handlerClick = () => {
        router.visit(route('logout'));
    }

    return(
        <div onClick={handlerClick} className="border rounded-md w-10 h-10 mx-2 flex justify-center items-center hover:cursor-pointer hover:shadow hover:shadow-white">
            <span>{icon}</span>
        </div>
    )
}

UIIconButton.defaultProps = {
    icon: <BsGear/>,
    route: 'logout'
}
