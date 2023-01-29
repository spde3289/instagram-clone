import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {

    const [postList, setPostList] = useState()

    const location = useLocation();
    const a = location.state.id

    console.log(postList)

    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then((response) =>{
            const found = response.data.find(e => e.id === a);
            setPostList(found);})
        .catch((error) => console.log(error))
    },[a])

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar/>
            <Main>
                
                <PostBox user={location} onClick={()=>{

                }}/>
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