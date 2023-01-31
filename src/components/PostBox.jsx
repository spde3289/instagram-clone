import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const PostBox = (props) => {

    const [files, setFiles] = useState([])
    const id = props.user.state.id
    const file = props.imgFile

    const thumbs = [...file].map(file => (
        <li>
            <PostImg
                key={file.name}
                src={file.preview}
                alt={file.name}
                onLoad={(e) => { console.log(e) }}
            />
        </li>
      ));

    useEffect(() => {
        return () => file.forEach(file => URL.revokeObjectURL(file.preview) );
    }, [file]);

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
                            {thumbs}
                        </PostImgList>
                    </PostImgRaping>
                </Post>
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
    height: 500px;
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
    display: block;
    width: auto;
    height: 100%;
`;

export default PostBox;
