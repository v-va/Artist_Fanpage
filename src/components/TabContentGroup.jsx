import React from "react";
import styled from "styled-components";
import Member from "./Member";

const TabContentGroup = () => {
    return (
        <StTabContent>
            <StGroup>
                <StGroupZone>
                    <StGroupContent>
                        <StGroupLabel>그룹명</StGroupLabel>
                        <StGroupInput type="text" />
                    </StGroupContent>
                    <StGroupContent>
                        <StGroupLabel>소속사</StGroupLabel>
                        <StGroupInput type="text" />
                    </StGroupContent>
                    <StGroupContent>
                        <StGroupLabel>데뷔곡</StGroupLabel>
                        <StGroupInput type="text" />
                    </StGroupContent>
                    <StGroupContent>
                        <StGroupLabel>데뷔일</StGroupLabel>
                        <StGroupInput type="text" />
                    </StGroupContent>
                </StGroupZone>
                <Member />
                <Member />
                <Member />
            </StGroup>
        </StTabContent>
    );
};

export default TabContentGroup;

const StTabContent = styled.div`
    width: 500px;
    overflow: hidden;
`

const StGroup = styled.div`
    height: 500px;
    box-sizing:border-box;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
  }
`
const StGroupZone = styled.div`
    padding: 5px 10px;
    /* border: 1px solid #ffc2d1; */
`
const StGroupContent = styled.div`
    margin: 7px;
`
const StGroupLabel = styled.label`
    display: inline-block;
    width: 70px;
`
const StGroupInput = styled.input`
    width: 75%;
    border-radius: 20px;
    border: 1px solid gray;
    padding: 3px 10px;
`