import React, { useState, useCallback } from 'react';
//import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {

    const [postInfo, setpostInfo] = useState();
    const [postInfoList, setpostInfoList] = useState([]);


    const location = useLocation();

    const OnPostInfo = (file) => {
        setpostInfo(file);
    };  
    
    const aa = useCallback(()=>{
        if(postInfo !== undefined) {
            const a = [...postInfoList];
            a.push(postInfo);
            setpostInfoList(a)
            console.log(postInfo)
            console.log(postInfoList === undefined)
        }
    },[postInfo])
    
    const postList = postInfoList?.map((info, index)=> (
        <PostBox key={index} user={location} postInfo={info} />
    ));

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostInfo={OnPostInfo} onClick={aa}/>
            <Main>
                <button onClick={(e)=>{
                    e.preventDefault();
                    console.log(postInfo === undefined )
                    console.log(postInfoList !== undefined);
                    }}>asdasdasd</button>
        
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