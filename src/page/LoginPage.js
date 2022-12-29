import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {

    return(
        <>
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
        </>
    );
};

const MainBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 348px;
    height: 379.984px;
    padding: 10px 0;
    border: 1px solid #000;
`;

const Logo = styled.div`
    background-image: url(https://static.cdninstagram.com/rsrc.php/v3/y5/r/TJztmXpWTmS.png);
    background-repeat: no-repeat;
    background-position: -414px -259px;
    height: 16px;
    width: 16px;
`;

const LoginBox = styled.form`
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