import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
  @media (max-width: 768px) {
   padding:5px 5px 50px 5px;
  }
`;

export const CommonCard=styled.div`
   text-align: center;
   overflow: hidden;
   margin-bottom: 8px;
   background-color: #fff;
   border-radius: 5px;
   position: relative;
   box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      border-radius: 5px;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        background-color: white;
        text-align: left;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      button {
        img {
          margin: 0 4px 0 -2px;
        }
      }
    }
  }
`;


export const Artical= styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export const SharedActor=styled.div`
  padding-right:40px ;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a{
   margin-right: 12px;
   flex-grow: 1;
   overflow: hidden;
   display: flex;
   text-decoration: none;
   img{
      width: 48px;
      height: 48px;

   }
   &>div{
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span{
         text-align: left;
         &:first-child{
            font-size: 14px;
            font-weight: 700;
            color: rgba(0,0,0,1);

         }
         &:nth-child(n+2){
            font-size:12px;
            color: rgba(0,0,0,0.6);
         }
      }

   }
  }
  button{
   position: absolute;
   right:12px;
   top:0;
   background: transparent;
   border: none;
   outline: none;
  }

`;

export const Description=styled.div`
   padding: 0 16px;
   overflow: hidden;
   color: rgba(0,0,0,0.9);
   font-size: 14px;
   text-align: left;
`;
export const SharedImg=styled.div`
   margin-top: 8px;
   width: 100%;
   display: block;
   position: relative;
   background-color: #f9fafb;
   img{
      object-fit: contain;
      width: 100%;
      height: 100%;
   }
`;

export const SocialCounts = styled.ul`
   line-height: 1.3;
   display: flex;
   justify-content: space-between;
   overflow: auto;
   margin: 0 16px;
   padding: 8px 0;
   border-bottom: 1px solid #e9e5df;
   list-style: none;
   li{
      margin-right: 5px;
      font-size: 12px;
      button{
         display: flex;
         border: none;
         color: rgba(0,0,0,0.6);
         background: transparent;
         span{
            padding-left: 5px;
         }
         &:last-child{
            cursor: pointer;
         }
      }
   }
   
`;

export const SocialActions=styled.div`
   align-items: center;
   display: flex;
   justify-content: space-between;
   margin: 0;
   min-height: 40px;
   padding: 4px 8px;
   button {
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 3px;
      display: flex;
      align-items: center;
      column-gap: 5px;
      padding: 8px;
      color: rgba(0,0,0,0.6); 
      border: none;
      background: transparent;
      span{
         margin-left: 4px;
         color: rgba(0,0,0,0.6);
         font-size: 14px;
      }

      &:hover{
         background: rgba(0,0,0,0.1);
      }

      @media (min-width: 768px) {
         span{
            margin-left: 8px;
         }
         
      }
   }
   button.active{
      span{
         color:#0a66c2;
         font-weight:600;
      }
      svg{
         fill:#0a66c2;
      }
   }
`;


export const Content=styled.div`
   text-align: center;
   &>img{
      width:60px
   }
`;
export const CommentSectioninp = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding-bottom: 20px;
  margin:5px 25px 0px 12px;
  gap: 10px;


  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  input {
    width: 100%;
    height: 30px;
    border-radius: 15px;
    padding-left: 15px;
  }
  button {
    height: 32px;
    border-radius: 5px;
  }
`;
export const CommentSection = styled(SharedActor)`
a{
   margin-right: 12px;
   flex-grow: 1;
   overflow: hidden;
   display: flex;
   text-decoration: none;
   img{
      width: 40px;
      height: 40px;
      border-radius: 50%;

   }
}

`;