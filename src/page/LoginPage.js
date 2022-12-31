import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import smartPhoneImg from '../imgs/smartphone.png';
import LogoImg from '../imgs/Logo.png';
import imgs from '../imgs/imgs.png';

const LoginPage = () => {

    return(
        <Main>  
            <GlobalStyle/>
            <SmartPhone>
            </SmartPhone>
            <div className="Ass">
                <MainBox>
                    <Logo>
                        <div></div>
                    </Logo>
                    <LoginBox>
                        <IdBox/>
                        <PaswardBox/>
                        <LoginButton>
                            <div>
                                로그인
                            </div>
                        </LoginButton>
                        <Or>
                            또는
                        </Or>
                        <FacebookLogin type='button'>
                            <FacebookImg>
                                
                            </FacebookImg>
                            <FacebookText>
                                Facebook으로 로그인
                            </FacebookText>
                        </FacebookLogin>
                        <ForgotPassword>
                            비밀번호를 잊어셨나요?
                        </ForgotPassword>
                    </LoginBox>
                </MainBox>
                <SignUpBox></SignUpBox>
            </div>
        </Main>
    );
};

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    .Ass{
        display: flex;
        height: 727px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

const SmartPhone = styled.div`
    width: 380.312px;
    height: 581.15px;
    background: url(${smartPhoneImg}) no-repeat -46px 0px;
    margin-right: 32px;
    margin-bottom: 12px;
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
    background: url(${LogoImg}) no-repeat 0px -54px;; 
    background-size: auto;
    width: 175px;
    height: 51px;
    margin: 36px 0 12px;
`;

const LoginBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 348px;
    height: 266.984px;
    margin-top: 24px;
`;

const IdBox = styled.input`
    width: 250px;
    height: 20px;
    margin: 0 40px 6px;
    padding: 9px 0 7px 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;
const PaswardBox = styled.input`
    width: 250px;
    height: 20px;
    margin: 0 40px 6px;
    padding: 9px 0 7px 8px;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const LoginButton = styled.button`
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
    }
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
    width: 348px;
    height: 41px;
    border: 1px solid black;
`;

export default LoginPage;