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
            <Join>
                아이디 
                <JoinId/>
                비밀번호
                <JoinPassword/>
                이름
                <JoinName/>
            </Join>
        </JoinBox>
    );
};

const JoinBox = styled.div`
    position: absolute;
    border: 1px solid black;
    background: #fff;
    .icon{
        position: absolute;
        right: 0px;
        width: 24px;
        height: 24px;
    }
`;

const Join = styled.form`
    display: flex;
    flex-direction: column;
`;

const JoinId = styled.input`
`;

const JoinPassword = styled.input`
`;

const JoinName = styled.input`
`;

export default JoinPage;