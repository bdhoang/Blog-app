import React from 'react'
import './topbar.css'
import { Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';
export default function TopBar() {
    const { user, dispatch } = useContext(Context)
    const PF = "http://localhost:5000/images/"
    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className="top">
            <div className="topLeft">My App</div>
            <div className="topCenter">
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/' className='link' >HOME</Link>
                    </li>
                    <li className='topListItem'><Link to='/' className='link' >ABOUT</Link></li>
                    <li className='topListItem'><Link to='/' className='link' >CONTACT</Link></li>
                    <li className='topListItem'>
                        <Link to='/write' className='link' >WRITE</Link></li>
                    <li className='topListItem' onClick={handleLogOut} >{user && 'LOGOUT'} </li>
                </ul>
            </div>
            <div className="topRight">
                {user ?
                    (
                        <Link to='/settings'>
                            <Image width={40} height={40}
                                style={{ borderRadius: '50%', objectFit: 'cover', cursor: 'pointer' }}
                                preview={false}
                                src={PF + user.profilePic} />
                        </Link>
                    )
                    : (
                        <ul className='topList'>
                            <li className='topListItem'>
                                <Link className='link' to='/login'>LOGIN</Link>
                            </li>
                            <li className='topListItem'>
                                <Link className='link' to='/register'>REGISTER</Link>
                            </li>
                        </ul>
                    )}

                <SearchOutlined style={{
                    fontSize: '22px',
                    color: '#666',
                    cursor: 'pointer',
                    marginLeft: '15px',
                    fontWeight: "bolder"
                }} />

            </div>
        </div>
    )
}
