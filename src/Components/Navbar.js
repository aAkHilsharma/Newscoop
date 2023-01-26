import { Component } from "react";

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/link">Newscoop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/link">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">General</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">Business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">Health</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">Entertainment</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">Science</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/link">Sports</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        )
    }
}