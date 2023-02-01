import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {

    const [userInfo, setuserInfo] = useState([]);
    const [postInfo, setpostInfo] = useState();
    const [postInfoList, setpostInfoList] = useState();

    const location = useLocation();
    const userId = location.state.id;
    
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then((response) =>{
            console.log(response.data)
            })
        .catch((error) => console.log(error))
    },[userId])

    async function postUser() {
        axios({
            method:"POST",
            url: 'http://localhost:3001/user',
            data: postInfo
        }).then((res)=>{
            console.log(res.data);
            setuserInfo(res.data);
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
      };

    async function getUser() {
        axios({
            method:"get",
            url: 'http://localhost:3001/user',
        }).then((res)=>{
            console.log(res.data);
            setpostInfoList(res.data);
        }).catch(error=>{
            console.log(error);
            throw new Error(error);
        });
      };

    const OnPostInfo = (file) => {
        let obj = Object.assign({}, file);
        setpostInfo(obj);
    };

    const postList = postInfoList.map(info=>(
        <PostBox user={location} postInfo={info} />
    )) 


    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostInfo={OnPostInfo}/>
            <Main>
                <button onClick={(e)=>{
                    e.preventDefault();
                    postUser()
                    console.log(userInfo)
                    console.log(postInfo)
                    }}>asdasdasd</button>
                <button onClick={(e)=>{
                    e.preventDefault();
                    getUser()
                    console.log(userInfo)
                    console.log(postInfo)
                    }}>얻기</button>
                { userInfo.length ? {postList} : <></> }

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