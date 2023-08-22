import '/resources/css/Modules/Navigation.css';
import pathfinder from '/resources/assets/images/PathFinder.png';
import { BsBarChartLine, BsPeople,BsPersonLinesFill, BsPersonCircle, BsCalendarCheck, BsGear,BsArrowLeftRight, BsArrowBarRight} from "react-icons/bs";
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

export default function Navigation ({children}) {

    return (
        <div className='bg-pathfinder w-3/12 flex-col h-screen text-white' data-source="resources/js/Layouts/Navigation.jsx">

            <div className='py-6'>
                hello
            </div>

            <div className='header border-y border-pathfinder-line'>
                <div className='flex justify-around py-6'>
                    <img src={pathfinder} alt="pathfinder" className="object-cover w-16 h-16 rounded-full bg-white"/>

                    <div className='py-2'>
                        <h3 className='text-2xl font-medium'>Linaje Real</h3>
                        <p className='text-sm font-thin'>PathFinder</p>
                    </div>
                </div>
            </div>

            <div className="menu-content px-4 py-6 border-b border-pathfinder-line">
                <div className="nav-items rounded-md w-9/12">
                    <div className="px-4 ">
                        <span className="icon"><BsBarChartLine/></span>
                        <span className='px-4'>Dashboard</span>
                    </div>
                </div>

                <div className="nav-items rounded-md w-9/12">
                    <div className="px-4">
                        <span className="icon"><BsPersonLinesFill/></span>
                        <span className='px-4'>Member</span>
                    </div>
                </div>

                <div className="nav-items rounded-md w-9/12">
                    <div className="px-4">
                        <span className="icon"><BsPeople/></span>
                        <span className='px-4'>Unit</span>
                    </div>
                </div>

                <div className="nav-items rounded-md w-9/12">
                    <div className="px-4">
                        <span className="icon"><BsCalendarCheck/></span>
                        <span className='px-4'>Calendar</span>
                    </div>
                </div>
            </div>

            <div className="menu-footer pt-4 mtp-50">
                <div className="footer-content-items px-10 flex justify-between">
                    <div className="border rounded-md w-10 h-10 px-4 flex justify-center items-center">
                        <span className=""><BsGear/></span>
                    </div>

                    <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                        <span className=""><BsPersonCircle/></span>
                    </div>

                    <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                        <span className=""><BsArrowLeftRight/></span>
                    </div>

                    <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                        <span className=""><BsArrowBarRight/></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
