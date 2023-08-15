import '/resources/css/Modules/Navigation.css';

export default function Navigation ({children}) {

    return (
        <div className='bg-pathfinder w-3/12 h-screen' data-source="resources/js/Layouts/Navigation.jsx">

            <div className='py-6'>
                hello
            </div>

            <div className='border-y border-pathfinder-line'>
                <div className='header flex justify-around text-white py-2'>
                    <div className="rounded-full w-16 h-16 bg-gray ">

                    </div>

                    <div className='py-2'>
                        <h3 className='text-2xl font-medium'>Linaje Real</h3>
                        <p className='text-sm font-thin'>PathFinder</p>
                    </div>
                </div>
            </div >
        </div>
    );
}
