import React from 'react';
import styled from 'styled-components';
//아이콘
import { CgProfile, CgMoreAlt } from 'react-icons/cg'

const PostBox = (props) => {

    const id = props.user.state.id
    
    const file = props.postInfo;
    console.log(props)

    file?.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
    }))

 
    const thumbs = file?.map((file,index) => (
        <Thumb  key={index}>
            <ThumbInner>
                <PostImg
                    src={file.preview}
                    alt={file.name}
                />
            </ThumbInner>
        </Thumb >
      ));

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
    position: relative;
    left: 0px;
`;

const Thumb = styled.li`
    display: inline-flex;
    justify-content: center;
    border-Radius: 2px;
    border: 1px solid #eaeaea;
    margin-Bottom: 8px;
    margin-Right: 8px;
    width: 470px;
    height: 470px;
    padding: 4px;
    box-Sizing: border-box;
`;

const ThumbInner = styled.div`
    display: flex;
    justify-content: center;
    width: 470px;
    overflow: hidden;
`;

const PostImg = styled.img`
    display: block;
    width: auto;
    height: 100%;
`; 

export default PostBox;
