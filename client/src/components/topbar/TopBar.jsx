import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./topbar.css"
import { Context } from '../../context/Context';


export default function TopBar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/";
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link className='link' to="/" >HOME</Link>
                    </li>
                    
                    <li className='topListItem'>
                        <a href="http://localhost:3000/" className='link'>CHEF</a> 
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write" >WRITE</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/settings" >ABOUT</Link>
                    </li>
                    <li className='topListItem' onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                {
                    user ? (
                        <Link to="/settings">
                            <img className='topImg'
                                src={PF + user.profilePic} alt="" />
                        </Link>
                    )
                        : (
                            <ul className='topList'>
                                <li className='topListItem'><Link className='link' to="/login" >Login</Link></li>
                                <li className='topListItem'><Link className='link' to="/register" >Register</Link></li>
                            </ul>
                        )
                }

                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
            </div>

        </div>
    )
}
