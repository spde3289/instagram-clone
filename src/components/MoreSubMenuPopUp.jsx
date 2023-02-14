import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router';
//아이콘
import { 
    AiOutlineSetting,
    AiOutlineFieldTime
} from 'react-icons/ai';
import { RxBookmark } from 'react-icons/rx';
import { BiMessageAltError } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi';

const MoreSubMenuPopUp = () => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/');
    };

    return(
        <MoreSubMenuBox>
            <MoreSubMenu>
                <MoreSubMenuItem className="first" >
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
                <MoreSubMenuItem className='account'>
                    <MenuText className='set'>
                        계정 전환
                    </MenuText>
                </MoreSubMenuItem>
                <MoreSubMenuItem onClick={()=>{
                    onClickHandler();
                    }}>
                    <MenuText className='set'>
                        로그아웃
                    </MenuText>
                </MoreSubMenuItem>
            </MoreSubMenu>
        </MoreSubMenuBox>
    );
};

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

const MoreSubMenuBox = styled.div`
    position: absolute;
    left: 20px;
    bottom: 80px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, .0975);
`;

const MoreSubMenu = styled.ul`
    width: 238px;
    border-radius: 6px;
`;

const MoreSubMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background-color: white;
    border-top: 0.5px solid rgb(219, 219, 219);
    &.first{
        border: none;
    };
    &.account{
        border-top: 6px solid rgb(239, 239, 239);
    };
    &:hover{
        background: rgb(239, 239, 239);
    };
`;


export default MoreSubMenuPopUp;