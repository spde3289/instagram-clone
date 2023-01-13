import React from 'react';
import styled from 'styled-components';

import { MdOutlineCancel } from 'react-icons/md'

const JoinPage = (props) => {

    const handlePopUp = ()=>{
        props.PopUp();
    };

    return(
        <JoinBox>
            <MdOutlineCancel className="icon" 
            onClick={()=>{
                handlePopUp()
            }}/>
            <Title>회원가입</Title> 
            <Join>
                아이디<div>중복 검사</div>
                <JoinInput/>

                비밀번호
                <JoinInput/>
                이름
                <JoinInput/>

                <Summit>가입하기</Summit>
            </Join>
        </JoinBox>
    );
};

const JoinBox = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 350px;
    height: 475px;
    top: -423px;
    left: -1px;
    border: 1px solid #cccccc;
    background: #ffffff;
    padding: 25px 20px;
    .icon{
        position: absolute;
        right: 25px;
        width: 24px;
        height: 32px;
    };
    .text{

    };
`;

const Title = styled.h2`
    font-weight: normal;

`;

const Join = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 15px;
`;

const JoinInput = styled.input`
    border: 1px solid #cccccc;
    background: rgba(216,216,216,0.171);
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 9px 0 7px 8px;
    outline: none;
`;

const Summit = styled.button`
    height: 32px;
    border: none;
    background-color: rgb( 0,149,246);
    border-radius: 8px;
    color: white;
    opacity: .7;
`;


export default JoinPage;