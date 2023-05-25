import React from 'react'

export default function Home() {
    return (
        <>
            <div className="container my-4">
                <ul className="nav d-flex justify-content-between ">
                    <li className="nav-item">
                        <a className="nav-link MyAboutMainMenu MyActiveLink" aria-current="page" href="#ourCompany">Our
                            Expertise</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link MyAboutMainMenu" href="#ourExpertise">Our Work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link MyAboutMainMenu" href="#ourProjects">Our Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link MyAboutMainMenu" href="#Contact">Work with Us</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
