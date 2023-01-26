import React from "react";
import styled from "styled-components";

import { HiXMark } from 'react-icons/hi2'


const Create = (props) => {

    console.log(props)

    return(
        <CreateLayout>
            <HiXMark className="icon"/>
            <CreateBox>
                <Flexbox>
                    <CreateHeader>
                        새 게시물 만들기
                    </CreateHeader>
                    <CreateBody>
                        사진과 동영상을 여기에 끌어다 넣으세요   
                    </CreateBody>

                </Flexbox>
                
            </CreateBox>
        </CreateLayout>
    );
};

const CreateLayout = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
    height: 753px;
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

`;



export default Create;