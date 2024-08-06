import React, { useEffect } from 'react';
import PersonalIcon from '../img/personal-icon.png';
import ModifyIcon from '../img/modifyIcon.png';
import { Link } from 'react-router-dom';
import './adminpage.css';

function Adminpage(){

    return(
        <div className='container' id='mypageContainer'>
            <div className='TopText'>마이페이지</div>
            <div className="profileContainer">
                <img src={PersonalIcon} className='profileIcon'/>
                <div className="profileInfoContainer">
                    <p className='profileName'>김멋사<span> 원장</span></p>
                    <p className='profileEmail'>Kim&Ko 치과의원</p>
                </div>
                <img src={ModifyIcon} className='modifyIcon'/>
            </div>
            <div className="profileReserveContainer">
                <p className='ReserveSituation'>예약 현황</p>
                <div className="ReserveMessageContainer">
                    <p className='ReserveMessage'>예약 고객이 없습니다</p>
                </div>
                
            </div>
        </div>
    )
}

export default Adminpage