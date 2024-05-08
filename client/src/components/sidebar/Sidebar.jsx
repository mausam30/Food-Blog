import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME

                </span>
                <img src="/images/cook.jpeg" width="300px" height="300px" alt="" />
                <p>Cooking involves using various techniques and ingredients to prepare food. 
                    It requires creativity, patience, and attention to detail. 
                    Cooking can be done for various reasons, such as for nourishment, pleasure, or as a social activity. 
                    It is a skill that can be learned and mastered with practice. 
                    Cooking can bring joy and satisfaction to both the cook and those who enjoy the food.</p>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">

                    {cats.map(c => (
                        <Link to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem active">{c.name}</li>

                        </Link>

                    ))}


                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                </div>
            </div>

        </div>
    )
}
