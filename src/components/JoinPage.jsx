import React, { useState } from 'react';
import styled from 'styled-components';
// 아이콘
import { MdOutlineCancel } from 'react-icons/md'


const JoinPage = (props) => {

    const [Id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [userInfo, setUserInfo] = useState([]);
    const account = props.account;
 
    const handlePopUp = () => {
        props.PopUp();
    };

    const AddUserInfo = () => {
        const user = [...account];
        const NewUser = {
            id: Id,
            password: Password,
            name: Name, 
        };
        console.log(user)
        user.push(NewUser);
        setUserInfo(user);
        console.log(userInfo);
        props.user(account);
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    };

    const onChangeName = (e) => {
        setName(e.target.value)
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value)
    };

    const onSubmit = (e) => {
        const idOverlap = userInfo.findIndex(user=>(user.id === e.target.id.value))
        if(idOverlap !== -1){
            return alert('중복된 아이디입니다.');
        }
        if(Password !== passwordCheck){
            return alert('비밀번호와 비밀번호 확인이 같지 않습니다.');
        };
        console.log(account)
        AddUserInfo(e);
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
                onSubmit(e);
            }}>
                <div className='flexBox'>
                    아이디
                    <JoinInput type='id' name='id' 
                    onChange={(e)=>{
                        onChangeId(e);
                    }}/>
                </div>
                <div className='flexBox'>
                    이름
                    <JoinInput type='name' name='name'
                    onChange={(e)=>{
                        onChangeName(e);
                    }}/>
                </div>
                <div className='flexBox'>
                    비밀번호
                    <JoinInput type='password' name='password'
                    onChange={(e)=>{
                        onChangePassword(e);
                    }}/>
                </div>
                <div className='flexBox'>
                    비밀번호 확인
                    <JoinInput type='password' name='password'
                    onChange={(e)=>{
                        onChangePasswordCheck(e);
                    }}/>
                </div>
                <div className='flexBox'>
                    <Submit type='submit' name='submit' value='회원가입'/>
                </div>
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
    };
`;

const Title = styled.h2`
    font-weight: normal;
`;

const Join = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 15px;
    .flexBox{
        display: flex;
        flex-direction: column;
        padding-bottom: 23px;
    };
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