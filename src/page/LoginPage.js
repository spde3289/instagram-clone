import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {

    return(
        <>
            <MainBox>
                <Logo>
                    로그인 페이지
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
                        <FacebookImg></FacebookImg>
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
    width: 348px;
    height: 379.984px;
    padding: 10px 0;
    border: 1px solid #000;
`;

const Logo = styled.div`
    border: 1px solid #000;
    width: 175px;
    height: 51px;
    `;

const LoginBox = styled.div`
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