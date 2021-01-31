import React  from 'react';
 
import {
  MainVisualWrapper,
  MainVisualForm,
  // MainVisualH1,
  ImgWrap,
  MainVisualVideo,
  MainVisualH1,
  MainVisualButton,
  MainVisualButton2
} from './MainVisualStyle'
// import Tome from './Trailer/Tome.mp4';
import { IoPlaySharp } from "react-icons/io5";
import { MdFavorite } from "react-icons/md"
 
 
export const MainVisual = ({
  ButtonLabel,
  ButtonLabel2,
  Img2
  // topLine,
  // Img,
  // ButtonLabel,
}) => {
     return (
       <>
         <MainVisualWrapper>
           <MainVisualForm>
             <ImgWrap>
                <MainVisualVideo 
                src={Img2}
                ></MainVisualVideo>  
                <MainVisualH1>Tom & Jerry</MainVisualH1>
                <MainVisualButton>
                  <IoPlaySharp/>
                  {ButtonLabel}</MainVisualButton>
                <MainVisualButton2>
                  <MdFavorite/>
                  {ButtonLabel2}</MainVisualButton2>
             </ImgWrap>
           </MainVisualForm>
         </MainVisualWrapper>
       </>
     );
 }


 export default MainVisual;