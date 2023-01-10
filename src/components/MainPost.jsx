import React from 'react';
import styled from 'styled-components';

const MainPost = () => {

    return(
        <>
            <PostBox>
                <Post>
                    <PostHeader>
                        <Profile>
                            프로필 사진
                        </Profile>
                        <Option>    
                            더보기 아이콘
                        </Option>
                    </PostHeader>  
                    <div>
                        <PostImg></PostImg>
                        
                    </div>
                </Post>
            </PostBox>
            메인페이지
        </>
    );
};

const PostBox = styled.div`
    width: 268px;
    height:85px;
    padding: 16px 0;
    margin-top: 27px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background: #ffffff;
`;

const Post = styled.div`
    
`;

const PostHeader = styled.div`
    
`;

const Profile = styled.div`

`;

const Option = styled.div`

`;

const PostImg = styled.div`

`;

const Comment = styled.div`

`;

export default MainPost;
