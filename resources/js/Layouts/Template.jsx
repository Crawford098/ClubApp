import './Navigation';
import Navigation from "@/Layouts/Navigation";

export default function Template ({children}) {

    return (
        <div className="flex justify-between" data-source="resources/js/Layouts/Template.jsx">
            <Navigation/>

            <div className="w-full">
                <main>{children}</main>
            </div>
        </div>
    );
}
