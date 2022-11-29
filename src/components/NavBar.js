import "./NavBar.css";
import React from "react";
import * as aiIcons from "react-icons/ai";
import * as faIcons from "react-icons/fa";

export default function NavBar() {
    return (
        <nav>
            <h3 className="title">Patel's Digital Clock</h3>
            <div className="links">
                <a href="https://github.com/chirag389817">
                    <aiIcons.AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/chirag-patel-36b875232/">
                    <aiIcons.AiFillLinkedin />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100072052472890">
                    <faIcons.FaFacebookSquare />
                </a>
                <a href="https://www.instagram.com/patel._.cs/">
                    <aiIcons.AiFillInstagram />
                </a>
            </div>
        </nav>
    );
}
