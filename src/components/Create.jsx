import React, { useState, useEffect } from "react";
import {useDropzone} from 'react-dropzone'
import styled from "styled-components";
//아이콘
import { HiXMark } from 'react-icons/hi2'

const Previews = (props) => {
  
    const [files, setFiles] = useState([]);
    const [text, setText] = useState('');
    const {
        getRootProps, 
        getInputProps} = useDropzone({
            maxFiles:9,
            accept: {
                'image/*': []
            },
            onDrop: (acceptedFiles, fileRejections) => {
                const maxFiles = fileRejections.length === 0;
                const addFile = files.length === 0 ;
                const newFiles = [...files];
                const hasDuplicates = acceptedFiles.some(acc => files.some(files => acc.name === files.name));
                
                newFiles.push(...acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                })));
            
                if(!maxFiles) alert('이미지는 9개까지 업로드 할 수 있습니다.');
                if(!hasDuplicates){
                    if(addFile){
                        setFiles(acceptedFiles.map(file => Object.assign(file, {
                            preview: URL.createObjectURL(file)
                    })))}else if(files.length + acceptedFiles.length < 10){
                        setFiles(newFiles);
                    }else alert('이미지는 9개까지 업로드 할 수 있습니다.')
                }else alert('중복되는 이미지는 업로드 할 수 없습니다.')
            }
        });

    const deletimg = (e) => {
        const deletimg = files.filter(file => file.preview !== e.target.src);
        setFiles(deletimg);
    }

    const thumbs = [...files].map((file) => (
      <Thumb key={file.name}>
        <ThumbInner onClick={(e) => {
                deletimg(e);
            }}>
          <PostImg
            src={file.preview}
            alt={file.name}
            onLoad={() => {URL.revokeObjectURL(file.preview)}}
          />
        </ThumbInner>
      </Thumb>
    ));

    return (
      <Section>
        <ImgInput {...getRootProps()} 
        onClick={e=>{e.preventDefault()}}>
            <input {...getInputProps()}/>
            <p>이미지를 여기에 올려주세요</p>
            <ThumbsContainer>
                {thumbs}
            </ThumbsContainer>
        </ImgInput>
        <div>
            <Textinput placeholder="문구 입력..." value={text} onChange={(e)=>{
                if(e.target.value.length <= 200){
                    setText(e.target.value);
                };
            }}/>
            <TextLimit>{text.length}/200 자</TextLimit>
            <Button onClick={(e)=>{
                e.preventDefault();
                if( files.length === 0 ){
                    alert('이미지를 넣어주세요')
                }else if(text.length === 0){
                    alert('텍스트를 입력해주세요')
                }else{
                    props.onPostInfo(files);
                    props.onPostText(text)
                    props.onPopUp();
                }
            }}>만들기</Button>
        </div>
      </Section>
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
    z-index: 20;
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
    };
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
`;

const Section = styled.section`
    display: flex;
`;

const ImgInput = styled.div`
    border: 2px dashed #cccccc;
    margin-right: 10px;
    padding: 5px;
    width: 400px;
    height: 385px;
    display: flex;
    flex-direction: column;
`;

const ThumbsContainer = styled.aside`
    display: flex;
    justify-content: flex-start;
    flex-Direction: row;
    flex-Wrap: wrap;
    margin-Top: 16px;
`;

const Thumb = styled.div`
    display: inline-flex;
    justify-content: center;
    border-Radius: 2px;
    border: 1px solid #eaeaea;
    margin: 8px;
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
    margin-top: 15px;
    border-radius: 6px;
    border: 1px solid #8d7d7d7c;
    background-color: #ffff;
    color: #222222;
    font-size: 14px;
`;

const Textinput = styled.textarea`
    border: none;
    margin-bottom: 4px;
    width: 200px;
    height: 320px;
    font-size: 16px;
    outline: none;
    resize: none;
`;

const TextLimit = styled.div`
    text-align: right;
    font-size: 14px;
`;

export default Create;