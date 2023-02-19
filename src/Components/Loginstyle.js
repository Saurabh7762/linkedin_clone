import styled from "styled-components";


export const Container=styled.div`
 padding:0px
`;

export const Nav= styled.nav`
  max-width:1128px;
  margin:auto;
  padding:12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a{
    width:135px;
    height: 34px;
    @media (max-width:768px){
        padding: 0 5px;
    }
  }
`;

export const Join=styled.a`
  font-size: 16px;
  font-weight: bold;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 24px;
  color: rgba(0,0,0,0.6);
  margin-right: 12px;
  &:hover{
    background-color: rgba(0,0,0,0.08);
    color: rgba(0,0,0,0.9);
    text-decoration: none;
  }
`;
export const SignIn=styled.a`
   box-shadow: inset 0 0 0 1px #0a66c2;
   color: #0a66c2;
   background-color: rgba(0,0,0,0);
   border-radius: 24px;
   font-size: 16px;
   font-weight: 600;
   line-height: 40px;
   padding: 10px 12px;
   transition-duration: 167ms;
   text-align: center;
   &:hover {
    background-color: rgba(112,181,249,0.15);
    color: #0a66c2;
    text-decoration: none;
   }
`;

export const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;
export const Logingthumb=styled.div`
   width: 100%;
h1 {
    padding-bottom: 0;
    width: 56%;
    font-size: 56px;
    font-family: sans-serif;
    color: #2977c9;
    font-weight: 500;
    line-height: 70px;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 32px;
        width: unset;
        line-height: 40px;
        padding-bottom: 12px;
    }
}
img {
z-index: 1;
width: 700px;
height: 670px;
position: absolute;
bottom: 156px;
right: -150px;
overflow: hidden;
@media (max-width: 768px){
    top: 230px;
    /* min-width: 374px; */
    width: 320px;
    position: initial;
    height: 240px;
    bottom: calc(-64px);
    /* height: 240px;
    min-width: 374px;
    position: absolute;
    bottom: calc(-64px); */
}
}
`;

export const Form=styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  } 
`;
export const Googleloging=styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  } 
`;