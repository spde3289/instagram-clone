import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//아이콘
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const PostBox = (props) => {

    const [postMenu, setPostMenu] = useState(false);
    const bodyRef = useRef()
    const popUpRef = useRef();

    const id = props.user.state.id;
    const file = props.postInfo;
    const index = props.index;
    file.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
    })); 

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: false,
        indicators: true,
        arrows: true,
        autoplay: false,
    };

    const handleClickOutSide = (e) => {
        if (postMenu && !popUpRef.current.contains(e.target)) {
          setPostMenu(false);
        };
    };
    
    useEffect(() => {
        if (postMenu) document.addEventListener('mousedown', handleClickOutSide);
        return () => {
          document.removeEventListener('mousedown', handleClickOutSide);
        };
    });

     const thumbs = file.map((file,index) => (
        <EachSlide key={index}>
            <img
                src={file.preview}
                alt={file.name}
                onLoad={() => { URL.revokeObjectURL(file.preview) }}/>
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
                        <Option ref={popUpRef}>    
                            <CgMoreAlt className='icon' 
                            onClick={()=>{
                                setPostMenu(!postMenu)
                            }}/>
                        { postMenu ? 
                        <PostPopUp onClick={()=>{props.onClick(index)}}>게시물 삭제</PostPopUp> 
                        : <></>}
                        </Option>
                    </PostHeader>
                    <PostImgRaping >
                        <Slide {...properties}>
                            {thumbs} 
                        </Slide>
                    </PostImgRaping>
                    <CmncBox>
                        <TextBox>
                            {props.PostText}
                        </TextBox>
                    </CmncBox>
                </Post>
            </PostLayout>
        </>
    );
};

const PostLayout = styled.div`
    position: relative;
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

const PostPopUp = styled.div`
    position: absolute;
    top: 50px;
    right: -30px;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background-color: white;
    width: 105px;
    padding: 12px 7px;
    text-align: center;
    z-index: 11;
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

const EachSlide = styled.div`
    height: 500px;
    width: auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CmncBox = styled.div`
    padding: 8px;
`;

const TextBox = styled.p`
    width: 100%;
    word-break:break-all;
`;


export default PostBox;
