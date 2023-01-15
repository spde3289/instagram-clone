import React, { useState } from 'react';
import styled from 'styled-components';

import { MdOutlineCancel } from 'react-icons/md'

const JoinPage = (props) => {

    const [Id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [account, setAccount] = useState([{
        id: 'instaram1',
        password: 'instaram1',
        name: 'user1',
    },]);
 
    const handlePopUp = ()=>{
        props.PopUp();
    };

    const AddUserInfo = () => {
        const NewUser = {
            id: Id,
            password: Password,
            name: Name, 
            };
        const user = [...account];
        user.push(NewUser);
        setAccount(user);
        console.log(user);
    };

    const onChangeId = (e)=>{
        setId(e.target.value)
    };

    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    };

    const onChangeName = (e)=>{
        setName(e.target.value)
    };

    const onChangePasswordCheck = (e)=>{
        setPasswordCheck(e.target.value)
    };


    return(
        <JoinBox>
            <MdOutlineCancel className="icon" 
            onClick={()=>{
                handlePopUp();
            }}/>
            <Title>회원가입</Title> 
            <Join onSubmit={(e)=>{
                e.preventDefault();

                if(Password !== passwordCheck){
                    return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
                };

                console.log({
                    Id,
                    Name,
                    Password,
                    passwordCheck
                });
                AddUserInfo(e);

            }}>
                아이디
                <JoinInput type='id' name='id' 
                onChange={(e)=>{
                    onChangeId(e);
                }}/>
                {/* {  && <div className='alarm'>중복된 아이디 입니다.</div>} */}
                이름
                <JoinInput type='name' name='name'
                onChange={(e)=>{
                    onChangeName(e);
                }}/>
                {/* {  && <div className='alarm'>빈칸입니다.</div>} */}
                비밀번호
                <JoinInput type='password' name='password'
                onChange={(e)=>{
                    onChangePassword(e);
                }}/>
                비밀번호 확인
                <JoinInput type='password' name='password'
                onChange={(e)=>{
                    onChangePasswordCheck(e);
                }}/>
                {/* {  && <div className='alarm'>비밀번호가 일치하지 않습니다.</div>} */}
                <Submit type='submit' name='submit' value='회원가입'/>
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
    .alarm{
        color: red;
    }
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