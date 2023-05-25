import React from 'react'
import menuImage from '../assets/images/menu.png'
import logo from '../assets/images/logo-blue-hiedberg.svg'
import '../App.css';
export default function Navbar(props) {
    return (

        <>
            <header id={props.headerId}>

                <nav className="navbar p-2 navbar-expand-md fixed-top ">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <img src={menuImage} alt="" />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item mx-2"><a className="nav-link" href="index.html"> Hiedberg </a></li>
                                <li className="nav-item mx-2"><a className="nav-link" href="about.html"> About </a></li>
                                <li className="nav-item mx-2"><a className="nav-link" href="./assets/images/Hiedberg-Remote.pdf"
                                    target="_blank"> Remote Assistance </a></li>
                                <li className="nav-item">
                                    <div className="buttons">
                                        <a className="btn btn-default btn-secundary" href="contact.html"><span className="subtitle"
                                            style={{ color: "aliceblue", margin: 0 }}>Contact</span></a>
                                    </div>
                                </li>
                                <li className="nav-link w-100 d-md-none">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <a href="#" className="px-2">
                                            <img alt="search-icon-in-header" className="opacity-50" src="./assets/images/search.png"
                                                width="20" height="20" />
                                        </a>
                                        <input type="text" className="m-0 outline-none rounded-pill searchInput"
                                            placeholder="Search" />
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                </nav>
                <section id="row-number-1" className="home-header row-number-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-lg-7 col-xl-6">
                                <h1>{props.Heading}</h1>
                            </div>
                        </div>
                    </div>
                    <img className="logo-figure mw-100" alt="Hiedberg Logo Figure" src={props.ImageEllispe} />
                    <div className="background" ></div>
                </section>
            </header>
        </>
    )
}
