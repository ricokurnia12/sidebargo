import React from "react";
import Gored from "../Assets/Gored.png";
const Navbaradmin = () => {
    return (
        <>
            <nav class="navbar fixed-top">
                <div class="container-fluid ">
                    <a class="drop"></a>

                    <div class="dropdown">
                        <a
                            className="dropdown-toggle text-white "
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Admin
                        </a>

                        <ul class="dropdown-menu">
                            <li>
                                <a class="dropdown-item" href="#">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbaradmin;
