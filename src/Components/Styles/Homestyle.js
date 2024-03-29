import styled from "styled-components";

export const Container=styled.div`
   max-width:100%;
   padding:52px 10px 20px 10px;
`;
export const Section=styled.section`
   min-height: 50px;
   padding: 16px 0;
   box-sizing: content-box;
   text-align: center;
   text-decoration: underline;
   display: flex;
   justify-content: center;
   h5{
    color: #0a66c2;
    font-size: 14px;
    a{
        font-weight: 700;
    }
   }
   p{
    font-size: 14px;
    color: #434649;
    font-weight: 700;
   }
   @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
    p{
        color: red;
    }
    
   }
`;


export const Content=styled.div`
   max-width: 1128px;
   margin-left:auto ;
   margin-right: auto;
`;

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  width: 100%;
  row-gap: 25px;

  /* grid-template-rows: auto ; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
   position: relative;
   top: 0px;
   height: 55vh;
    
  }
`;