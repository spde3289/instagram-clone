import React, { useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
// 아이콘 
import { 
    MdHomeFilled, 
    MdOutlineSlowMotionVideo 
} from 'react-icons/md';  
import { 
    AiOutlineSearch, 
    AiOutlineCompass, 
    AiOutlineHeart, 
    AiOutlinePlusSquare,
    AiOutlineMenu,
} from 'react-icons/ai';
import { 
    HiOutlinePaperAirplane,
} from 'react-icons/hi';
// 이미지
import LogoImg from '../imgs/Logo.png';
//컴포넌트
import MoreSubMenuPopUp from './MoreSubMenuPopUp';
import Create from './Create';

const Sidebar = (props) => {

    const [open, setOpen] = useState(false);
    const [create, SetCreate] = useState(false);
    const ref = useRef();
    const menuList = [
        {key: 1, text: '홈', icon: <MdHomeFilled className="icon"/> },
        {key: 2, text: '검색', icon: <AiOutlineSearch className="icon"/> },
        {key: 3, text: '탐색 탭', icon: <AiOutlineCompass className="icon"/> },
        {key: 4, text: '릴스', icon: <MdOutlineSlowMotionVideo className="icon"/> },
        {key: 5, text: '메시지', icon: <HiOutlinePaperAirplane className="icon"/> },
        {key: 6, text: '알림', icon: <AiOutlineHeart className="icon"/> },
        {key: 7, text: '만들기', icon: <AiOutlinePlusSquare className="icon"/> },
        {key: 8, text: '프로필' },
    ];

    const menu = menuList.map(item=>(
        <Menu key={item.key} className='cursor' onClick={()=>{
            OnCategory(item.text);
        }}>
            {item.icon}
            <MenuText>{item.text}</MenuText>
        </Menu>
    ));
    
    const OnCategory = (text) => {
        if(text === '만들기'){
            OnCreate();
        };
    };

    const OnCreate = () => {
        SetCreate(!create);
    };

    const OnFile = (file) => {
        props.onPostInfo(file)
    };
    
    const handleClickOutSide = (e) => {
        if (open && !ref.current.contains(e.target)) {
          setOpen(false);
        };
    };
    
    useEffect(() => {
        if (open) document.addEventListener('mousedown', handleClickOutSide);
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide);
        };
    });

    return(
        <Nav>
            <div>
                <div>
                    <LogoBox>
                        <a href="/">
                            <Logo/>
                        </a>
                    </LogoBox>
                </div>
                { create ? <Create onCreate={OnCreate} onFile={OnFile}/> : <></> }
                <ul>
                    {menu}
                </ul>
            </div>
            <div ref={ref}>
                <div ref={ref}>
                    { open ? <MoreSubMenuPopUp/> : <></> }
                </div>
                <More 
                className="cursor"
                onClick={()=>{
                    setOpen(!open);
                }}>
                    <AiOutlineMenu className="icon" />
                    <MenuText className="more">
                        더보기
                    </MenuText>
                </More>
            </div>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 12px 20px;
    width: 244px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #cccccc;
    background: #fff;
    .flexBox{
        display: flex;
    };
    .cursor{
        cursor: pointer;
    };
    .icon{
        width: 28px;
        height: 28px;
    };
`;

const LogoBox = styled.div`
    box-sizing: border-box;
    padding: 25px 12px 16px;
    margin-bottom: 15px;
`;

const Logo = styled.div`
    background: url(${LogoImg}) no-repeat 0px -28px;
    background-size: 104px 100px;
    width: 103px;
    height: 29px;
    border: 1px;
    margin-top: 7px;
`;

const Menu = styled.li`
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 12px;
    box-sizing: border-box;
    &:hover{
        background: rgba(216, 216, 216, 0.171);
        border-radius: 25px;
        .icon{
            transition: transform ease-out .1s;
            transform: scale(calc(15 / 14));
        };
    };
    
`;

const More = styled.div`
    margin: 4px 0;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

const MenuText = styled.div`
    padding-left: 16px;
    font-size: 16px;
    color: #262626;
    &.more{
        height: 24px;
    };
    &.set{
       padding-left: 0;
    };
`;

export default Sidebar;