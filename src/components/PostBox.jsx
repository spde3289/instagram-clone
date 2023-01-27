import React from 'react';
import styled from 'styled-components';
import { CgProfile, CgMoreAlt } from 'react-icons/cg'
import carbon from '../imgs/carbon.png'

const PostBox = (props) => {
    console.log(props.user.state.id)
    const id = props.user.state.id
    return(
        <>
            <PostLayout>
                <Post>
                    <PostHeader>
                        <PostProfile>
                            <CgProfile className='icon'/>
                            <div className='name'>{id}</div>
                        </PostProfile>
                        <Option>    
                            <CgMoreAlt className='icon'/>
                        </Option>
                    </PostHeader>  
                    <PostImgRaping>
                        
                        <PostImgList>
                            <li>
                                <PostImg src={carbon}/>
                            </li>
                            <li>
                                <PostImg src={carbon}/>
                            </li>
                        </PostImgList>
                    </PostImgRaping>
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
    align-items: center;
`;

const PostProfile = styled.div`
    display: flex;
    align-items: center;
    
    .icon{
        width: 32px;
        height: 32px;
        margin: 10px;
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

const PostImgRaping = styled.div`
    width: 470px;
    overflow: hidden;
`;

const PostImgList = styled.ul`
    display: flex;
`;

const PostImg = styled.img`
    width: 470px;
`;

const Comment = styled.div`

`;

export default PostBox;
