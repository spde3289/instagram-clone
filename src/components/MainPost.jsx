import React from 'react';
import styled from 'styled-components';
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const MainPost = () => {

    return(
        <>
            <PostBox>
                <Post>
                    <PostHeader>
                        <Profile>
                            <CgProfile className='icon'/>
                            <div className='name'>사용자 1 </div>
                        </Profile>
                        <Option>    
                            <CgMoreAlt className='icon'/>
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
    display: flex;
    flex-direction: column;
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Profile = styled.div`
    display: flex;
    .icon{
        width: 32px;
        height: 32px;
    }
    .name{

    }
`;

const Option = styled.div`
    .icon{
        width: 24px;
        height: 24px;
    }
`;

const PostImg = styled.div`

`;

const Comment = styled.div`

`;

export default MainPost;
