import React, { useState } from 'react';
//import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';
import Create from '../components/Create';

const MainPage = () => {

    const [postInfoList, setpostInfoList] = useState([]);
    const [postTextList, setPostTextList] = useState([]);
    const [onPopUp, SetOnPopUp] = useState(false);

    const location = useLocation();

    const OnPostInfo = (file) => {
        const a = [...postInfoList];
        a.push(file);
        setpostInfoList(a);
    };  

    const OnPostText= (text) => {
        const a = [...postTextList];
        a.push(text);
        setPostTextList(a);
    };  

    const OnPopUp = () => {
        SetOnPopUp(!onPopUp);
    };

    const OnClick = (index) => {
        const a = [...postInfoList];
        const b = [...postTextList];
        a.splice(index, 1);
        b.splice(index, 1);
        setpostInfoList(a);
        setPostTextList(b); 
    };

    const postList = [];
    
    for(let i = 0; i < postInfoList.length; i++) {
        postList.push(
            <PostBox 
            onClick={OnClick} 
            key={i} 
            user={location} 
            postInfo={postInfoList[i]}
            PostText={postTextList[i]}
            index={i}/>
        )
    }

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostInfo={OnPostInfo} onPopUp={OnPopUp}/>
            <Main>
                { onPopUp ? 
                <Create onPopUp={OnPopUp} 
                onPostInfo={OnPostInfo} 
                onPostText={OnPostText}/> : <></> }
                { postInfoList.length ? postList.reverse() : <></> }
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