import React, { useState } from 'react';
import styled from 'styled-components';

import { MdOutlineCancel } from 'react-icons/md'

const JoinPage = (props) => {

    const [IdCheck, setIdCheck] = useState(false);
    const [PassWordCheck, setPassWordCheck] = useState(false);
    const [NameCheck, setNameCheck] = useState(false);
    const [account, setAccount] = useState([{
        id: 'instaram1',
        password: 'instaram1',
        name: 'user1',
    },]);
 
    const handlePopUp = ()=>{
        props.PopUp();
    };

    const AddUserInfo = (e) => {
        const NewUser = {
            id: e.target.id.value,
            password: e.target.password.value,
            name: e.target.name.value 
            };
        const user = [...account];
        user.push(NewUser);
        setAccount(user);
    };

    const onIdCheck = (e)=>{
        const IdValue = account.findIndex(s=>(s.id === e.target.id.value));
        if(IdValue === -1 && e.target.id.value !== ''){
            setIdCheck(true);
        }else{
            setIdCheck(false);
        };
        console.log(IdCheck)
    };

    const onPasswordCheck = (e)=>{
        if(e.target.password.value){
            setPassWordCheck(true);
        }else{
            setPassWordCheck(false);
        };
    };

    const onNameCheck = (e)=>{
        if(e.target.name.value){
            setNameCheck(true);
        }else{
            setNameCheck(false);
        }
    };


    return(
        <JoinBox>
            <MdOutlineCancel className="icon" 
            onClick={()=>{
                handlePopUp()
            }}/>
            <Title>회원가입</Title> 
            <Join onSubmit={(e)=>{
                e.preventDefault();
                console.log(account)
                onIdCheck(e);
                onPasswordCheck(e);
                onNameCheck(e);
                if(IdCheck && PassWordCheck && NameCheck) AddUserInfo(e);

            }}>
                아이디<input type='submit' name='check' value='중복확인' />
                <JoinInput type='id' name='id' />

                비밀번호
                <JoinInput type='password' name='password'/>
                이름
                <JoinInput type='name' name='name'/>

                <Submit type='submit' name='submit' value='submit'/>
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

const Submit = styled.input`
    height: 32px;
    border: none;
    background-color: rgb( 0,149,246);
    border-radius: 8px;
    color: white;
    opacity: .7;
`;


export default JoinPage;