import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
// 아이콘
import { MdOutlineCancel } from 'react-icons/md'

const JoinPage = (props) => {

    const [Id, setId] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [passwordCheck,setPasswordCheck] = useState('');
    const [account, setAccount] = useState({});

    const handlePopUp = () => {
        props.PopUp();
    };

    async function getUser() {
        try {
            const response = await axios.get('http://localhost:3001/account',);
            setAccount(response.data)
        } catch (error) {
            console.error(error);
        };
    };

    useEffect(()=>{
        getUser()
    },[])

    async function postUser() {
        axios({
            method:"POST",
            url: 'http://localhost:3001/account',
            data:{
                "id" : Id,
                "password": Password,
                "name": Name
            }
        }).catch(error=>{
            throw new Error(error);
        });
      };

    const AddUserInfo = () => {
        postUser();
        handlePopUp();
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
        console.log(idVal.test(Id) , nameVal.test(Name) , passwordVal.test(Password) , !passwordCheckVal)

        if(idVal.test(Id) & nameVal.test(Name) & passwordVal.test(Password) & !passwordCheckVal ){
            getUser()
            const idOverlap = account.findIndex(user=>(user.id === e.target.id.value))
            if(idOverlap !== -1){
                setId('');
                return alert('중복된 아이디입니다.');
            }
            AddUserInfo(e);
        }else{
            if(!idVal.test(Id)){
                setId('');
                alert('영문, 숫자를 섞어서 6자 이상 20자 이하로 작성해주세요')
            }
            if(!nameVal.test(Name)){
                setName('');
                alert('이름을 한글로 작성해주세요')
            }
            if(!passwordVal.test(Password)){
                setPassword('');
                setPasswordCheck('');
                alert('영문, 숫자를 섞어서 6자 이상 20자 이하로 작성해주세요')
            }
            if(passwordCheckVal){
                setPasswordCheck('');
                alert('비밀번호가 일치하지 않습니다.')
            }
        }

       
    };
    
    const idVal = new RegExp("^[a-zA-Z][0-9a-zA-Z]{5,19}$");
    const nameVal = new RegExp("^[ㄱ-ㅎ|가-힣]+$");
    const passwordVal = new RegExp("^[a-zA-Z][0-9a-zA-Z]{5,19}$");
    const passwordCheckVal = Password !== passwordCheck;
    
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
                    <JoinInput type='id' name='id' className='id' value={Id}
                    onChange={(e)=>{
                        onChangeId(e);
                    }}/>
                    { !idVal.test(Id) ? 
                    <Validations>영문, 숫자를 섞어서 6자 이상 20자 이하</Validations>
                    : <></> }
                </div>
                <div className='flexBox'>
                    이름
                    <JoinInput type='name' name='name' value={Name}
                    onChange={(e)=>{
                        onChangeName(e);
                    }}/>
                    { !nameVal.test(Name) ?
                    <Validations>한글로 작성해주세요</Validations>
                    : <></> }
                </div>
                <div className='flexBox'>
                    비밀번호
                    <JoinInput type='password' name='password' autoComplete="on" value={Password}
                    onChange={(e)=>{
                        onChangePassword(e);
                    }}/>
                    { !passwordVal.test(Password) ?
                    <Validations>영문, 숫자를 섞어서 6자 이상 20자 이하</Validations>
                    : <></> }
                </div>
                <div className='flexBox'>
                    비밀번호 확인
                    <JoinInput type='password' name='password' autoComplete="on" value={passwordCheck}
                    onChange={(e)=>{
                        onChangePasswordCheck(e);
                    }}/>
                    { passwordCheckVal ?
                    <Validations>비밀번호가 일치하지 않습니다.</Validations>
                    : <></> }
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
        position: relative;
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

const Validations = styled.div`
    position: absolute;
    bottom: 6px;
    font-size: 13px;
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