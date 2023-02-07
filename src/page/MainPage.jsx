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
    console.log(postTextList);
    const OnPopUp = () => {
        SetOnPopUp(!onPopUp);
    };

    const OnClick = (e) => {
        const a = [...postInfoList].splice(e, 1);
        setpostInfoList(a)
        console.log(postInfoList,e)
    }

    console.log(postInfoList);
    
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

/*     const postList = postInfoList?.map((info, index)=> (
        <PostBox 
        onClick={OnClick} 
        key={index} 
        user={location} 
        postInfo={info}
        PostText={postTextList}
        index={index}/>
    )); */

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostInfo={OnPostInfo} onPopUp={OnPopUp}/>
            <Main>
                { onPopUp ? 
                <Create onPopUp={OnPopUp} 
                onPostInfo={OnPostInfo} 
                onPostText={OnPostText}/> : <></> }
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
    overflow: hidden;
`;

export default MainPage