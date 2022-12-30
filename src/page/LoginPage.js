import React from 'react';
import styled from 'styled-components';
import smartPhoneImg from '../imgs/smartphone.png';
import LogoImg from '../imgs/Logo.png';

const LoginPage = () => {

    return(
        <Main>  
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
                        <div>
                            또는
                        </div>
                        <FacebookLogin>
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
    border: 1px solid #000;
    margin-bottom: 10px;
`;

const Logo = styled.div`
    background-image: url(${LogoImg}); //https://static.cdninstagram.com/rsrc.php/v3/y-/r/yXM3FgMdVNX.png
    background-position: 0px -52px; 
    background-size: auto;
    width: 175px;
    height: 51px;
    margin: 36px 0 12px;
`;

const LoginBox = styled.form`
    display: flex;
    width: 348px;
    height: 266.984px;
    flex-direction: column;
`;

const IdBox = styled.input`

`;
const PaswardBox = styled.input`

`;

const LoginButton = styled.button`
`;

const FacebookLogin = styled.button`
`;

const FacebookImg = styled.span`
    
`;

const FacebookText = styled.span`
`;

const ForgotPassword = styled.a`

`;

const SignUpBox = styled.div`
    width: 348px;
    height: 41px;
    border: 1px solid black;
`;

export default LoginPage;