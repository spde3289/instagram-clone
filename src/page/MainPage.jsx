import React, { useState, useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useLocation } from 'react-router';
// 컴포넌트 
import GlobalStyle from '../components/GlobalStyle';
import Sidebar from '../components/Sidebar'
import PostBox from '../components/PostBox';

const MainPage = () => {

    const [userInfo, setuserInfo] = useState()
    const [postImg, setpostImg] = useState([])

    const location = useLocation();
    const a = location.state.id
    
    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then((response) =>{
            const found = response.data.find(e => e.id === a);
            setuserInfo(found);})
        .catch((error) => console.log(error))
    },[a])

    const OnPostImg = (file) => {
        setpostImg(file)
        console.log(file)
        console.log(userInfo)
    };

    return(
        <Layout>
            <GlobalStyle/>
            <Sidebar onPostImg={OnPostImg}/>
            <Main>
                <button onClick={(e)=>{
                    e.preventDefault();
                    console.log(postImg)
                    }}>asdasdasd</button>
                { postImg ? <PostBox user={location} imgFile={postImg}/> : <></> }

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