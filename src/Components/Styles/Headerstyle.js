import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const SearchMob = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    justify-content:space-around;
    background: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
.active {
    span:after {
      content: " ";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;
export const ContentMob = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
export const NavListMessup = styled.li`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const NavListMess = styled.li`
  @media (max-width: 768px) {
    display:none;
  }
`;
export const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      justify-content: space-around;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const SignOut = styled.div`
  position: absolute;
  cursor: pointer;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

export const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    @media (max-width: 768px) {
      width: 40px;
      height: auto;
    }
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;
export const UserMob = styled(NavList)`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const UserMobbt = styled(NavList)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  @media (max-width: 768px) {
    display:none;
  }
`;