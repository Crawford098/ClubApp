import '/resources/css/Modules/Navigation.css';

export default function Navigation ({children}) {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="nav-container">

                    <div className="nav-header">

                    </div>

                    <div className="nav-body">

                    </div>

                    <div className="nav-bottom">

                    </div>
                </div>
            </div>

            <div className="col-md-8">
                <main>{children}</main>
            </div>
        </div>
    );
}
