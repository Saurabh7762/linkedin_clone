import styled from "styled-components";

export const Container=styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 9999;
   color: #121212;
   background-color: rgba(0, 0, 0, 0.8);
   animation: fadeIn 0.3s;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    top: 72px;
    width: 100%;
    max-width:552px;
    max-height: 90%;
    background-color: #fff;
    overflow: initial;
    margin: 0 auto;
    border-radius: 5px;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 20px;
    font-size: 16px;
    line-height: 1.5%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    h2 {
    
    font-size: 18px;
    line-height: 1.4;
    }
    button {
        width: 40px;
        height: 40px;
        min-width: auto;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.15);
        svg, 
        img {
            pointer-events: none;
        }
        &:hover{
        background: rgba(0,0,0,0.1);
        border-radius: 50px;
    }
    }
`;

export const SharedContent= styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y:auto ;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
  
 `;
export const UserInfo=styled.div`
   display: flex;
   align-items: center;
   padding: 12px 24px;
   svg,
   img{
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;

   }
   span{
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;

   }
`;

export const SharedCreation = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 24px 12px 16px;
`;

export const AssetButton = styled.button`
    display: flex;
    align-items: center;
    min-width: auto;
    height: 40px;
    background: transparent;
    outline: none;
    border: none; 
    cursor: pointer;
    color: rgba(0, 0, 0, 0.5);
    img {
         margin-right: 0;
    }
    &:hover{
        background: rgba(0,0,0,0.1);
        border-radius: 50px;
    }
`;

export const AttachAssets = styled.div`
    display: flex;
    align-items: center;
    padding-right: 8px;
    ${AssetButton} {
    width: 40px;
    margin-right: 10px;
}
`;

export const ShareComment = styled.div`
    margin-right: auto;
    padding-left: 8px;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    span {
        font-size: 14px;
        font-weight: 500;
        margin-left: 8px;
    }
    ${AssetButton} {
        width: 100%;
        height: 30px;
        margin-top: 5px;
    svg {
        margin-right: 5px;
    }
    } 
`;

export const PostButton = styled.button`
  min-width: 60px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 20px;
  height: 30px;
  margin-top: 3px;
  /* this css will disabled the post button till the user are not type any text on editor */
  //background: #0a66c2;
  background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.2)" : "#0a66c2")};
  color: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.3)" : "#fff")};
  font-weight: bold;

  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: ${(props) => (props.disabled ? "rgba(0, 0, 0, 0.22)" : "#004182")};
  }
`;

// texteditor style
export const Editor = styled.div`
    padding: 12px 4px;
    textarea {
        width: 100%;
        min-height: 100px;
        resize: none;
        outline: none;
        border: none;
        cursor: text;
        font-size: inherit;
    }
    input {
        width: 100%;
        height: 35px;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;



// upload style
export const UploadImage = styled.div`
    text-align: center;
    font-weight: 500;
    img {
        width: 100%;
        height: 100%;
    }
`;