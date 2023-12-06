import '/resources/css/Modules/Navigation.css';
import pathfinder from '/resources/assets/images/PathFinder.png';
import { BsBarChartLine, BsPeople,BsPersonLinesFill, BsPersonCircle, BsCalendarCheck, BsGear,BsArrowLeftRight, BsArrowBarRight} from "react-icons/bs";
import {Link} from '@inertiajs/react';

export default function Navigation ({children}) {

    return (
        <div className='bg-pathfinder w-[450px] flex-col h-screen text-white border-x shadow border-pathfinder-line' data-source="resources/js/Layouts/Navigation.jsx">
            <div className="container border-b border-pathfinder-line">
                <div className='flex py-6'>
                    <div>
                        <img src={pathfinder} alt="pathfinder" className="object-cover w-16 h-16 rounded-full bg-white"/>
                    </div>
                    <div className='py-2 px-4'>
                        <h3 className='text-2xl font-medium'>Linaje Real</h3>
                        <p className='text-sm font-thin'>PathFinder</p>
                    </div>
                </div>
            </div>
            <div className="container border-b border-pathfinder-line">
                {/*body - links*/}
                <div className="my-12">
                    <div className="nav-items rounded-md p-4">
                        <div className="text-xl">
                            <span className="icon"><BsBarChartLine/></span>
                            <span className='px-4'><Link href="/dashboard">Dashboard</Link></span>
                        </div>
                    </div>

                    <div className="nav-items rounded-md">
                        <div className="text-xl">
                            <span className="icon"><BsPersonLinesFill/></span>
                            <span className='px-4'><Link href="/members">Member</Link></span>
                        </div>
                    </div>

                    <div className="nav-items rounded-md">
                        <div className="text-xl">
                            <span className="icon"><BsPeople/></span>
                            <span className='px-4'><Link href="/units">Unit</Link></span>
                        </div>
                    </div>

                    <div className="nav-items rounded-md">
                        <div className="text-xl">
                            <span className="icon"><BsCalendarCheck/></span>
                            <span className='px-4'><Link href="/calendar">Calendar</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="my-12">
                    <div className="flex">
                        <div className="border rounded-md w-10 h-10 px-4 flex justify-center items-center">
                            <span><BsGear/></span>
                        </div>

                        <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                            <span><BsPersonCircle/></span>
                        </div>

                        <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                            <span><BsArrowLeftRight/></span>
                        </div>

                        <div className="border rounded-md w-10 h-10 flex justify-center items-center">
                            <span><BsArrowBarRight/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
