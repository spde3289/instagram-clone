import React, { useState, useEffect } from "react";
import {useDropzone} from 'react-dropzone'
import styled from "styled-components";

import { HiXMark } from 'react-icons/hi2'

const Previews = (props) => {
  
    const [files, setFiles] = useState([]);
    const [text, setText] = useState('');
    const {
        getRootProps, 
        getInputProps} = useDropzone({
            maxFiles:10,
            accept: {
                'image/*': []
            },
            onDrop: (acceptedFiles, fileRejections) => {
                const maxFiles = fileRejections.length === 0;
                const addFile = files.length === 0 ;
                const newFiles = [...files];
                newFiles.push(...acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                })));
                
                if(!maxFiles) alert('이미지를 10개만 업로드 할 수 있습니다');

                if(addFile){
                    setFiles(acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                })))}else if(files.length < 10){
                    setFiles(newFiles);
                }else alert('이미지가 10개를 초과 했습니다.');
            }
        });

    const thumbs = [...files].map((file) => (
      <Thumb key={file.name}>
        <ThumbInner>
          <PostImg
            src={file.preview}
            alt={file.name}
            onLoad={() => { URL.revokeObjectURL(file.preview); }}
            onClick={(e)=>{
                const deletimg = files.filter(file => file.preview !== e.target.src );
                setFiles(deletimg);
            }}
          />
        </ThumbInner>
      </Thumb>
    ));

    return (
      <section className="container">
        <ImgInput {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <p>이미지를 여기에 올려주세요</p>
        </ImgInput>
        <ThumbsContainer>
          {thumbs}
        </ThumbsContainer>
        <input type="text" value={text} onChange={(e)=>{
            setText(e.target.value)
            
        }}/>
        <Button onClick={(e)=>{
            e.preventDefault();
            if( files.length === 0 ){
                alert('이미지를 넣어주세요')
            }else{
                props.onPostInfo(files);
                props.onPostText(text)
                props.onPopUp();
            }
        }}>dasdasd</Button>
      </section>
    );
}
  
const Create = (props) => {

    useEffect(() => {
        document.body.style= `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])
      

    return(
        <CreateLayout>
            <HiXMark className="icon" onClick={()=>{
                props.onPopUp();
            }}/>
            <CreateBox>
                <Flexbox>
                    <CreateHeader>
                        새 게시물 만들기
                    </CreateHeader>
                    <CreateBody>
                        <Previews 
                        onPostInfo={props.onPostInfo} 
                        onPopUp={props.onPopUp} 
                        onPostText={props.onPostText}/>
                    </CreateBody>
                </Flexbox>
            </CreateBox>
        </CreateLayout>
    );
};

const CreateLayout = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
    background-color: rgba(0, 0, 0, .5);
    .icon{
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        height: 30px;
        color: #fff;
    }
`;

const CreateBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Flexbox = styled.div`
    width: 710px;
    border-radius: 18px;
    text-align: center;
    background: #fff;
`;

const CreateHeader = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #262626;
    border-bottom: 1px solid #cccccc;
    padding: 10px 0;
`;

const CreateBody = styled.div`
    margin: 40px 40px;
    height: 670px;
`;

const ImgInput = styled.div`
    border: 2px dashed #cccccc;
    height: 100px;
    width: 100%;
`;

const ThumbsContainer = styled.aside`
    display: flex;
    flex-Direction: row;
    flex-Wrap: wrap;
    margin-Top: 16px;
`;

const Thumb = styled.div`
    display: inline-flex;
    justify-content: center;
    border-Radius: 2px;
    border: 1px solid #eaeaea;
    margin-Bottom: 8px;
    margin-Right: 8px;
    width: 100px;
    height: 100px;
    padding: 4px;
    box-Sizing: border-box;
`;

const ThumbInner = styled.div`
    display: flex;
    min-width: 0;
    overflow: hidden;
`;

const PostImg = styled.img`
    display: block;
    width: auto;
    height: 100%;
`;

const Button = styled.button`
    width: 100px;
    height: 30px;
`;


export default Create;