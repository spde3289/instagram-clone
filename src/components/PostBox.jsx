import React, { useRef } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//아이콘
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const PostBox = (props) => {

    const bodyRef = useRef()

    const id = props.user.state.id
    const file = props.postInfo;
    const index = props.index
    file?.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
    }))

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: false,
        indicators: true,
        arrows: true,
    }

    const thumbs = file?.map((file,index) => (
            <EachSlide key={index}>
                <img
                    src={file.preview}
                    alt={file.name}
                    onLoad={() => { URL.revokeObjectURL(file.preview) }}
                />
            </EachSlide>
    )); 

    return(
        <>
            <PostLayout ref={bodyRef}>
                <Post>
                    <PostHeader>
                        <PostProfile>
                            <CgProfile className='icon'/>
                            <div className='name'>{id}</div>
                        </PostProfile>
                        <Option>    
                            <CgMoreAlt className='icon' 
                            onClick={()=>{props.onClick(index)}}/>
                        </Option>
                    </PostHeader>    
                    <PostImgRaping >
                        <Slide {...properties}>
                            {thumbs}
                        </Slide>
                    </PostImgRaping>
                    <p>
                        {props.PostText}
                    </p>
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

/* const Box = styled.div`
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
`; */

const EachSlide = styled.div`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;



export default PostBox;
