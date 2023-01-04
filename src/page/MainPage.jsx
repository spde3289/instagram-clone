import React from 'react';
import styled from 'styled-components';
//
import { 
    MdHomeFilled, 
    MdOutlineSlowMotionVideo 
} from 'react-icons/md' ;  
import { 
    AiOutlineSearch, 
    AiOutlineCompass, 
    AiOutlineHeart, 
    AiOutlinePlusSquare 
} from 'react-icons/ai';
import { HiOutlinePaperAirplane } from 'react-icons/hi';

const MainPage = () => {
    return(
        <Layout>
            <Sidebar>
                <div>로고 </div>
                <ul>
                    <li><MdHomeFilled/> 홈</li>
                    <li><AiOutlineSearch/> 검색</li>
                    <li><AiOutlineCompass/>탐색 탭</li>
                    <li><MdOutlineSlowMotionVideo/> 릴스</li>
                    <li><HiOutlinePaperAirplane/>메시지</li>
                    <li><AiOutlineHeart/>알림</li>
                    <li><AiOutlinePlusSquare/>만들기</li>
                    <li>프로필</li>
                </ul>
                <div>
                    더보기
                </div>
            </Sidebar>
            <Main>
                <PostBox>
                    메인 페이지 
                </PostBox>
            </Main>
        </Layout>
    );
};

const Layout = styled.div`
    display: flex;
`

const Sidebar = styled.nav`
    display: flex;
`;

const Main = styled.main`
    display: flex;
    margin: 0 auto;
`;

const PostBox = styled.main`
`;

export default MainPage