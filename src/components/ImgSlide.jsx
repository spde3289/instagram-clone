import React, { useState, useEffect } from "react";
import styled from "styled-components";
//이미지
import smartPhoneImg from '../imgs/smartphone.png';

const ImgSlider = () => {

    const [currentImg, setCurrentImg] = useState([
        { key:1, current:1, class:'img1', src:require("../imgs/screenshot1.png") },
        { key:2, current:0, class:'img2', src:require("../imgs/screenshot2.png")},
        { key:3, current:0, class:'img3', src:require("../imgs/screenshot3.png")},
        { key:4, current:0, class:'img4', src:require("../imgs/screenshot4.png")}
    ]);

    const wallPaper = [...currentImg].map(img=>(
        <Wallpapers
        key={img.key}
        className={img.class + (!img.current ? " hidden" : "")}
        src={img.src}
        ></Wallpapers>
    ));

    const imgHandler = (type) => {
        let currentIndex = currentImg.findIndex(img => img.current === 1);
        let updateIndex = type === 'prev'
        ? currentIndex -1
        : currentIndex + 1
        
        if(updateIndex === currentImg.length ){
            updateIndex = 0 
        }else if(updateIndex === -1)(
        updateIndex = currentImg.length -1
        );
        
        setCurrentImg([...currentImg].map((img, index)=>{
            return {
                key : img.key,
                current: index === updateIndex ? 1 : 0, 
                class: img.class,
                src : img.src
            };
        }));
    };

    useEffect(()=>{
        const slide =  setInterval(()=>{imgHandler('next')}, 4500);
        return () => clearInterval(slide);
    });


    return(
        <SmartPhone>
            {wallPaper}
        </SmartPhone>
    );
};

const SmartPhone = styled.div`
    width: 380.312px;
    height: 581.15px;
    background: url(${smartPhoneImg}) no-repeat -46px 0px;
    margin-right: 32px;
    margin-bottom: 12px;
`;

const Wallpapers = styled.img.attrs({alt:'배경화면 이미지'})`
    position: relative;
    left: 110px;
    transition: opacity .9s linear;
    &.img1{
        top:27px;
    };
    &.img2{
        top:-519px;
    };
    &.img3{
        top:-1063px;
    };
    &.img4{
        top:-1609px;
    };
    &.hidden{
        opacity: 0;
    };
`;



export default ImgSlider;