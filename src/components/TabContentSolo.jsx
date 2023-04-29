import React from "react";
import styled from "styled-components";

const TabContentSolo = () => {
    return (
        <StTabContent>
            <StSolo>
                <StSoloContent>
                <StSoloLabel>이름</StSoloLabel>
                <StSoloInput type="text" />
                </StSoloContent>
                <StSoloContent>
                <StSoloLabel>소속사</StSoloLabel>
                <StSoloInput type="text" />
                </StSoloContent>
                <StSoloContent>
                <StSoloLabel>데뷔곡</StSoloLabel>
                <StSoloInput type="text" />
                </StSoloContent>
                <StSoloContent>
                <StSoloLabel>데뷔일</StSoloLabel>
                <StSoloInput type="text" />
                </StSoloContent>
                <StSoloContent>
                <StSoloLabel>생일</StSoloLabel>
                <StSoloInput type="text" />
                </StSoloContent>
            </StSolo>
        </StTabContent>
    );
};

export default TabContentSolo;

const StTabContent = styled.div`
    width: 500px;
    overflow: hidden;
`
const StSolo = styled.div`
    height: 500px;
    margin-top: 85px;
`
const StSoloLabel = styled.label`
    display: inline-block;
    width: 70px;
`
const StSoloContent = styled.div`
    margin: 7px;
`
const StSoloInput = styled.input`
    width: 75%;
    border-radius: 20px;
    border: 1px solid gray;
    padding: 3px 10px;
`