import axios from "axios";
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
// 컴포넌트
import GlobalStyle from '../components/GlobalStyle';
import ImgSlider from '../components/ImgSlide';
import JoinPage from '../components/JoinPage';
// 이미지
import GLink from '../imgs/GLink.png';
import LogoImg from '../imgs/Logo.png';
import MsLink from '../imgs/MsLink.png';
import imgs from '../imgs/imgs.png';

const LoginPage = () => {

    const [IdOn, setIdOn] = useState(false);
    const [onLogin, setOnLogin] = useState(false);
    const [PasswordOn, setPasswordOn] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const input = useRef();
    const navigate = useNavigate();

    async function getUser() {
        try {
          const response = await axios.get('/json/db.json');
          console.log( response.data)
            const user = response.data.account.find(
                (users) => users.id === id && users.password === password
          );
          console.log(user)
            if (user === undefined){ 
                setId('');
                setPassword('');
                alert('아이디나 비밀번호가 일치하지 않습니다');
            }else{
                navigate('/home', {state:user});
            }
        } catch (error) {
            console.error(error);
        };
    };
    
    const addIdClass = (e) => {
        setIdOn(true);
        setId(e.target.value);
        if(e.target.value.length === 0){
            setIdOn(false);
        };
    };


    const addPasswardClass = (e) => {
        setPasswordOn(true);
        setPassword(e.target.value);
        if(e.target.value.length === 0){
            setPasswordOn(false);
        };
    };

    const inputOnClick = () => {
        input.current.focus();
    };

    const PopUp = () => {
        setOnLogin(!onLogin);
    };

    return(
        <>
            <Main>  
                <Article>
                    <GlobalStyle/>
                    <ImgSlider/>
                    <div className="Ass">
                        <MainBox>
                            <Logo>
                                
                            </Logo>
                            <LoginBox onSubmit={(e)=>{
                                e.preventDefault();
                                getUser();
                            }}>
                                <A>
                                    <PlaceHolder className={ IdOn ? 'Idtarget' : ''}
                                    onClick={()=>{inputOnClick()}}>
                                        전화번호, 사용자 이름 또는 이메일
                                    </PlaceHolder>
                                    <LoginInputBox className={ IdOn ? 'target' : '' } 
                                    aria-label='전화번호, 사용자 이름 또는 이메일' 
                                    aria-required='true'
                                    ref={input}
                                    value={id}
                                    onChange={e=>{
                                        addIdClass(e);
                                    }}/>
                                </A>
                                <A>
                                    <PlaceHolder className={ PasswordOn ? 'target' : ''}>
                                        비밀번호
                                    </PlaceHolder>
                                    <LoginInputBox className={ PasswordOn ? 'target' : '' } 
                                    aria-label='비밀번호' 
                                    aria-required='true'
                                    type='password'
                                    name='password'
                                    autoComplete="on"
                                    value={password}
                                    onChange={e=>{
                                        addPasswardClass(e);
                                    }}/>
                                </A>
                                <LoginButton type='submit' name='submit' value='로그인'/>
                                <Or>
                                    또는
                                </Or>
                                <FacebookLogin type='button'>
                                    <FacebookImg/>
                                    <FacebookText>
                                        Facebook으로 로그인
                                    </FacebookText>
                                </FacebookLogin>
                                <ForgotPassword>
                                    비밀번호를 잊어셨나요?
                                </ForgotPassword>
                            </LoginBox>
                        </MainBox>
                        <SignUpBox>
                        { onLogin ? <JoinPage onLogin={onLogin} PopUp={PopUp}/> : <></> }
                            <p className="text">
                                계정이 없으신가요? 
                                <span className='link'onClick={()=>{
                                    setOnLogin(!onLogin);
                                }} >가입하기</span>
                            </p>
                        </SignUpBox>
                        <DownLodeBox>
                            <p className='text'>앱을 다운로드하세요.</p>
                            <div className='downimg'>
                                <a href='/'><img className='gimg' alt="구글다운로드링크" src={GLink}/></a>
                                <a href='/'><img className='msimg' alt="MS다운링크" src={MsLink}/></a>
                            </div>
                        </DownLodeBox>
                    </div>
                </Article>
            </Main>
            <Footer>
                <InfoBox>
                    <a href='/' className='link'>
                        <Corp>Meta</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>소개</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>블로그</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>채용 정보</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>도움말</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>API</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>개인정보처리방침</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>약관</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>인기 계정</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>위치</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>Instagram Lite</Corp>
                    </a>
                    <a href='/' className='link'>
                        <Corp>연락처 업로드 & 비사용자</Corp>
                    </a>
                </InfoBox>
                <Service>
                    <Language>
                        <option>한국어</option>
                    </Language>
                    <div className='insta'>© 2023 Instagram from Meta</div>
                </Service>
            </Footer>
        </>
    );
};

const Main = styled.main`
    box-sizing: border-box;
    overflow: hidden;
    .Ass{
        display: flex;
        height: 727px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    };
`;

const Article = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    padding-bottom: 32px;
`;

const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 348px;
    height: 379.984px;
    padding: 10px 0;
    border: 1px solid #cccccc;
    margin-bottom: 10px;
    background-color: white;
`;

const Logo = styled.div`
    background: url(${LogoImg}) no-repeat 0px -52px;
    background-size: auto;
    width: 175px;
    height: 53px;
    margin: 36px 0 12px;
`;

const LoginBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 348px;
    height: 266.984px;
    margin-top: 24px;
    .text{
        overflow: hidden;
    };
`;

const LoginInputBox = styled.input`
    width: 250px;
    height: 20px;
    padding: 9px 0 7px 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
    outline: none;
    background: rgba(216, 216, 216, 0.171);
    &.target{
        font-size: 12px;
        padding: 14px 0 2px 8px !important;
    };
`;

const A = styled.div`
    margin: 0 40px 6px;
    position: relative;
`;

const PlaceHolder = styled.span`
    position: absolute;
    top: 10.5px;
    left: 10px;
    height: 36px;
    font-size: 12px;
    color: rgb(142, 142, 142);
    transition: ease-out .1s;
    &.Idtarget{
        position: absolute;
        top: 10px;
        left: 0px;
        transition: transform ease-out .1s;
        transform: scale(calc(10 / 11)) translateY(-10px);
    };
    &.target{
        position: absolute;
        top: 10px;
        left: 5px;
        transition: transform ease-out .1s;
        transform: scale(calc(10 / 11)) translateY(-10px);
    };
`;

const LoginButton = styled.input`
    width: 268px;
    height: 32px;
    margin: 8px 40px;
    background-color: rgb( 0, 149, 246);
    border: none;
    border-radius: 8px;
    color: white;
    opacity: .7;
`;

const Or = styled.div`
    position: relative;
    font-size: 13px;
    color: #8E8E8E;
    margin: 10px 40px 18px;
    &::before{
        content: '';
        position: absolute;
        left: -119px;
        right: 40px;
        top: 9px;
        border-top: 1px solid #BDBDBD;
    };
    &::after{
        content: '';
        position: absolute;
        left: 40px;
        right: -119px;
        top: 9px;
        border-top: 1px solid #BDBDBD;
    };
`;

const FacebookLogin = styled.button`
    width: 268px;
    height: 20px;
    margin: 8px 40px;
    border: 0;
    background-color: #FFFFFF;
`;

const FacebookImg = styled.span`
    background: url(${imgs}) no-repeat -414px -259px;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    position: relative;
    top: 3px;
    display: inline-block;
`;

const FacebookText = styled.span`
    font-size: 13px;
    color: #385185;
`;

const ForgotPassword = styled.a`
    margin-top: 12px;
    font-size: 12px;
    color: #00376B;
`;

const SignUpBox = styled.div`
    position: relative;
    background-color: #fff;
    width: 348px;
    height: 41px;
    border: 1px solid #cccccc;
    padding: 10px 0;
    margin-bottom: 10px;
    .text{
        color: rgb(38,38,38);
        margin: 12px;
        text-align: center;
        font-size: 14px;
    };
    .link{
        text-decoration: none;
        color: #0095f6;
    };
`;

const DownLodeBox = styled.div`
    display: flex;
    flex-direction: column;
    .text{
        margin: 10px 20px;
        border: 0;
        font-size: 14px;
        line-height: 18px;
        text-align: center;
    };
    .gimg{
        width: 134.281px;
        height:40px;
        margin-right: 8px;
    };
    .msimg{
        width: 110.766px;
        height: 40px;
    };
    .downimg{
        margin: 10px;
    };
`;

const Footer = styled.footer`
    padding: 0 16px;
    margin-top: 24px;
    .link{
        text-decoration: none;
        color: #8E8E8E;
    };
`;

const InfoBox = styled.div`
    display: flex;
    justify-content: center;
`;

const Corp =styled.div`
    margin: 0 8px 12px;
    font-size: 12px;
`;

const Service = styled.div`
    display: flex;
    justify-content: center;
    margin: 12px 0;
    .insta{
        margin-left: 16px;
        font-size: 12px;
        color: #8E8E8E;
    };
`;

const Language = styled.select`
    border: none;
    background: rgba(216, 216, 216, 0);
    color: #8E8E8E;
`;

export default LoginPage;