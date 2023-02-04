import React, { useState } from 'react';
//import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {

    const [postInfoList, setpostInfoList] = useState([]);


    const location = useLocation();

    const OnPostInfo = (file) => {
        const a = [...postInfoList];
        a.push(file);
        setpostInfoList(a)
    };  

    
    const postList = postInfoList?.map((info, index)=> (
        <PostBox key={index} user={location} postInfo={info} />
    ));

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostInfo={OnPostInfo}/>
            <Main>
                { postInfoList.length ? postList : <></> }
            </Main>
        </Layout>
    );
};

const Layout = styled.div`
    display: flex;
    height: 100%;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`;

export default MainPage