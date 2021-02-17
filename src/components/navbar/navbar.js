import React from "react";
import "./navbar.css";



function Navbar() {
    return(
        <nav className="navbar navbar-dark navbar-expand-md bg-dark justify-content-between py-5 ">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            
        </div>
        <a className="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">Employee Directory</a>
        <div className="navbar-collapse collapse dual-nav w-50 order-2">
            {/* <ul className="nav navbar-nav ml-auto">
                <li className="nav-item"><a class="nav-link" href=""><i className="fa fa-twitter"></i></a></li>
                <li className="nav-item"><a className="nav-link" href=""><i className="fa fa-github"></i></a></li>
            </ul> */}
        </div>
    </div>
</nav>
    );
}

export default Navbar;