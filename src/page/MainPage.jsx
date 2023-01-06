import React from 'react';
import styled from 'styled-components';

// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import MainPost from '../components/MainPost';

const MainPage = () => {
    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar/>
            <Main>
                <PostBox>
                    <MainPost/>
                </PostBox>
            </Main>
        </Layout>
    );
};

const Layout = styled.div`
    display: flex;
    height: 100vh;
`;

const Main = styled.main`
    display: flex;
    margin: 0 auto;
`;

const PostBox = styled.main`
`;

export default MainPage