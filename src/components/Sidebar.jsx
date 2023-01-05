import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// 아이콘 
import { 
    MdHomeFilled, 
    MdOutlineSlowMotionVideo 
} from 'react-icons/md' ;  
import { 
    AiOutlineSearch, 
    AiOutlineCompass, 
    AiOutlineHeart, 
    AiOutlinePlusSquare,
    AiOutlineMenu,
    AiOutlineSetting,
    AiOutlineFieldTime
} from 'react-icons/ai';
import { RxBookmark } from 'react-icons/rx'
import { BiMessageAltError } from 'react-icons/bi'
import { 
    HiOutlinePaperAirplane,
    HiOutlineMoon,
} from 'react-icons/hi';

// 이미지
import LogoImg from '../imgs/Logo.png'

const Sidebar = () => {

    const [open, setOpen] = useState(false)
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
        <Menu key={item.key} className='cursor'>
            {item.icon}
            <MenuText>{item.text}</MenuText>
        </Menu>
    ));

    useEffect(()=>{
        MoreSubMenuFun(open)
    },[open])

    const MoreSubMenuFun = (a) => {
            console.log(a)
        return(
            <MoreSubMenuBox>
                <MoreSubMenu>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            설정
                        </MenuText>
                        <AiOutlineSetting className='icon'/>
                    </MoreSubMenuItem>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            저장됨
                        </MenuText>
                        <RxBookmark className='icon'/>
                    </MoreSubMenuItem>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            모드 전환
                        </MenuText>
                        <HiOutlineMoon className='icon'/>
                    </MoreSubMenuItem>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            내 활동
                        </MenuText>
                        <AiOutlineFieldTime className='icon'/>
                    </MoreSubMenuItem>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            문제 신고
                        </MenuText>
                        <BiMessageAltError className='icon'/>
                    </MoreSubMenuItem>
                </MoreSubMenu>
                <MoreSubMenu>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            계정 전환
                        </MenuText>
                    </MoreSubMenuItem>
                    <MoreSubMenuItem>
                        <MenuText className='set'>
                            로그아웃
                        </MenuText>
                    </MoreSubMenuItem>
                </MoreSubMenu>
            </MoreSubMenuBox>
        );
    }

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
                <MenuList>
                    {menu}
                </MenuList>
            </div>
            { open ? <MoreSubMenuFun/> : <></> }
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
        </Nav>
    );
};

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 12px 20px;
    width: 244px;
    box-sizing: border-box;
    border-right: 1px solid #cccccc;
    background: #fff;
    .flexBox{
        display: flex;
    }
    .cursor{
        cursor: pointer;
    };
    .icon{
        width: 30px;
        height: 30px;
    }
`;

const LogoBox = styled.div`
    box-sizing: border-box;
    padding: 25px 12px 16px;
    margin-bottom: 19px;
`;

const Logo = styled.div`
    background: url(${LogoImg}) no-repeat 0px -28px;
    background-size: 104px 100px;
    width: 103px;
    height: 29px;
    border: 1px;
    margin-top: 7px;
`;

const MenuList = styled.ul`
    
`;

const Menu = styled.li`
    display: flex;
    align-items: center;
    margin: 4px 0;
    padding: 12px;
    box-sizing: border-box;
    &:active{
        font-weight: bold;
    }
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

const More = styled.div`
    margin: 4px 0;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;

const MoreSubMenuBox = styled.div`
    position: absolute;
    bottom: 64px;
    display: flex;
    flex-direction: column;
`;

const MoreSubMenu = styled.ul`
    width: 238px;
    
`;

const MoreSubMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: transparent;
    border: 1px solid #cccccc;
`;


export default Sidebar;