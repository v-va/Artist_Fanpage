import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Thumbnail from "../components/Thumbnail";
import TabContentGroup from "../components/TabContentGroup";
import TabContentSolo from "../components/TabContentSolo";

const ArtistRegister = () => {
    return (
        <StContainer>
            {/* ----------------Header---------------- */}
            <Header />
            <div className="wrap">
                <StContentZone>
                    {/* ----------------Thumbnail---------------- */}
                    <Thumbnail />
                    <StTab>
                        <StTabNav>
                            <div>
                                <StTabNavBtn1>그룹</StTabNavBtn1>
                            </div>
                            <div>
                                <StTabNavBtn>솔로</StTabNavBtn>
                            </div>
                        </StTabNav>
                        <TabContentGroup />
                        {/* <TabContentSolo /> */}
                    </StTab>
                </StContentZone>
            </div>
            <StBtnWrap>
                <StRegisterBtn>등록하기</StRegisterBtn>
            </StBtnWrap>
        </StContainer>
    );
};

export default ArtistRegister;

const StContainer = styled.div`
    width: 800px;
    height: 500px;
    margin: 50px auto;
    color: gray;
`;
const StContentZone = styled.div`
    display: flex;
    flex-direction: row;
`
const StTab = styled.div`
    margin-left: 5%;
`
const StTabNav = styled.ul`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`
const StTabNavBtn = styled.button`
    padding: 5px 25px;
    border: 1px solid #ffa6c1;
    color: #ffa6c1;
    border-start-start-radius: 10px;    
    border-start-end-radius: 10px;
    background-color: #fff;  
`
const StTabNavBtn1 = styled(StTabNavBtn)`
    background-color: #ffa6c1;
    color: #fff;
`
const StBtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const StRegisterBtn = styled.button`
    padding: 10px;
    background-color: #ffa6c1;
    border: 1px solid #ffa6c1;
    border-radius: 7px;
    color: #fff;
`