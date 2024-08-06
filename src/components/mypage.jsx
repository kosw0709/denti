import React, { useEffect } from 'react';
import PersonalIcon from '../img/personal-icon.png';
import ModifyIcon from '../img/modifyIcon.png';
import { Link } from 'react-router-dom';
import './mypage.css';

function Mypage(){

    return(
        <div className='container' id='mypageContainer'>
            <div className='TopText'>마이페이지</div>
            <div className="profileContainer">
                <img src={PersonalIcon} className='profileIcon'/>
                <div className="profileInfoContainer">
                    <p className='profileName'>김유나<span> 님</span></p>
                    <p className='profileEmail'>likelion@naver.com</p>
                </div>
                <img src={ModifyIcon} className='modifyIcon'/>
            </div>
            <div className="profileReserveContainer">
                <p className='ReserveSituation'>예약 현황</p>
                <div className="ReserveMessageContainer">
                    <p className='ReserveMessage'>예약 내역이 없습니다</p>
                    <button>예약하러가기</button>
                </div>
                
            </div>
        </div>
    )
}

export default Mypage