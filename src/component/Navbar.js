import React from 'react'
import menuImage from '../assets/images/menu.png'
import logo from '../assets/images/logo-blue-hiedberg.svg'
import '../App.css';
export default function Navbar() {
    return (

        <>
            <nav class="navbar p-2 navbar-expand-md fixed-top ">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon">
                            <img src={menuImage} alt="" />
                        </span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto align-items-center">
                            <li class="nav-item mx-2"><a class="nav-link" href="index.html"> Hiedberg </a></li>
                            <li class="nav-item mx-2"><a class="nav-link" href="about.html"> About </a></li>
                            <li class="nav-item mx-2"><a class="nav-link" href="./assets/images/Hiedberg-Remote.pdf"
                                target="_blank"> Remote Assistance </a></li>
                            <li class="nav-item">
                                <div class="buttons">
                                    <a class="btn btn-default btn-secundary" href="contact.html"><span class="subtitle"
                                        style={{ color: "aliceblue", margin: 0 }}>Contact</span></a>
                                </div>
                            </li>
                            <li class="nav-link w-100 d-md-none">
                                <div class="d-flex align-items-center justify-content-between">
                                    <a href="#" class="px-2">
                                        <img alt="search-icon-in-header" class="opacity-50" src="./assets/images/search.png"
                                            width="20" height="20" />
                                    </a>
                                    <input type="text" class="m-0 outline-none rounded-pill searchInput"
                                        placeholder="Search" />
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}
