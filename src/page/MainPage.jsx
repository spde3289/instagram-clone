import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {
    const location = useLocation();
    console.log(location)
    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar/>
            <Main>
                <PostBox user={location}/>
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
    flex-direction: column;
    margin: 0 auto;
`;

export default MainPage