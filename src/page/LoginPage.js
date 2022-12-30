import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {

    return(
        <Main>  
            <SmartPhone>
                
            </SmartPhone>
            <MainBox>
                <Logo>
                    <div className='Logo'></div>
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
                </LoginBox>
            </MainBox>
        </Main>
    );
};

const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SmartPhone = styled.div`
    width: 380.32px;
    height: 601px;
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png);
    background-size: 468.32px 634.15px;
    background-position: -46px 639px;
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
`;

const Logo = styled.div`
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y-/r/yXM3FgMdVNX.png);
    background-position: 0px -52px;
    background-size: auto;
    width: 175px;
    height: 51px;
    background-repeat: no-repeat;
    display: inline-block;
`;

const LoginBox = styled.form`
    width: 100px;
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

export default LoginPage;