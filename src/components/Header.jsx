import styled from "styled-components";

const Header = () => {
    return (
        <StHeaderWrap>
            <StIcon></StIcon>
            <StTitle>아티스트 등록</StTitle>
        </StHeaderWrap>
    );
};

export default Header;

const StHeaderWrap = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    padding: 10px;
`

const StIcon = styled.div`
    width: 5px;
    background-color: #ffc2d1;
`

const StTitle = styled.h3`
    font-weight: bold;
    color: #ffa6c1;
    margin: auto 30px;
`
