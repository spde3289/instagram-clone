import React from 'react';
import styled from 'styled-components';
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const PostBox = () => {

    return(
        <>
            <PostLayout>
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
                <Comment></Comment>
            </PostLayout>
        </>
    );
};

const PostLayout = styled.div`
    width: 470px;
    padding: 16px 0;
    margin-top: 27px;
    margin-bottom: 15px;
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
    align-items: center;
    .icon{
        width: 32px;
        height: 32px;
    }
    .name{

    }
`;

const Option = styled.div`
    .icon{
        padding: 8px;
        width: 24px;
        height: 24px;
    }
`;

const PostImg = styled.div`

`;

const Comment = styled.div`

`;

export default PostBox;
