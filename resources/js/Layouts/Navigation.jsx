import '/resources/css/Modules/Navigation.css';
import pathfinder from '/resources/assets/images/PathFinder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

export default function Navigation ({children}) {

    return (
        <div className='bg-pathfinder w-3/12 h-screen text-white' data-source="resources/js/Layouts/Navigation.jsx">

            <div className='py-6'>
                hello
            </div>

            <div className='header border-y border-pathfinder-line'>
                <div className='flex justify-around py-2'>
                    <img src={pathfinder} alt="pathfinder" className="object-cover w-16 h-16 rounded-full bg-white"/>

                    <div className='py-2'>
                        <h3 className='text-2xl font-medium'>Linaje Real</h3>
                        <p className='text-sm font-thin'>PathFinder</p>
                    </div>
                </div>
            </div>

            <div className="menu-content px-10 pt-6">
                <div className="nav-items">
                    <span><FontAwesomeIcon icon={faCheckSquare}/></span>
                    <span className='px-3'>Dashboard</span>
                </div>

                <div className="nav-items">
                    <span><FontAwesomeIcon icon={faCheckSquare}/></span>
                    <span className='px-3'>Member</span>
                </div>

                <div className="nav-items">
                    <span><FontAwesomeIcon icon={faCheckSquare}/></span>
                    <span className='px-3'>Unit</span>
                </div>

                <div className="nav-items">
                    <span><FontAwesomeIcon icon={faCheckSquare}/></span>
                    <span className='px-3'>Calendar</span>
                </div>

            </div>
        </div>
    );
}
