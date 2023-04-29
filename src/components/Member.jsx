import React from "react";
import styled from "styled-components";

const Member = () => {
    return (
        <div className="memberZone">
            <StChkLeader>
                <StChkInput type="checkbox" />
                <label htmlFor="">리더</label>
            </StChkLeader>
            <StMemberWrap>
                <StMemberPhotoWrap>
                    <StMemberPhoto src="iu.png" alt="" />
                    <StMemberPhotoBtn>이미지업로드</StMemberPhotoBtn>
                </StMemberPhotoWrap>
                <StMemberInfo>
                    <StMemberName>
                        <StLabel>멤버이름</StLabel>
                        <StInput type="text" />
                    </StMemberName>
                    <div className="birthday">
                        <StLabel>생일</StLabel>
                        <StInput type="text" />
                    </div>
                </StMemberInfo>
                <div className="delBtn">
                    <StDelBtn>&times;</StDelBtn>
                </div>
            </StMemberWrap>
            <StAddMember>
                <StAddBtn>+</StAddBtn>
            </StAddMember>
        </div>
    );
};

export default Member;

const StMemberWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
const StMemberInfo = styled.div`
    width: 65%;
    align-self: center;
    margin-bottom: 20px;
`
const StMemberPhotoWrap = styled.div`
    width: 20%;
`
const StMemberPhoto = styled.img`
    padding: 5px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
`
const StInput = styled.input`
    margin: 10px;
    width: 68%;
    border-radius: 15px;
    border: 1px solid gray;
    padding: 3px 10px;
`
const StLabel = styled.label`
    display: inline-block;
    width: 70px;
`
const StMemberName = styled.div`
    margin-top: 15px;
`
const StChkLeader = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 75px;
    margin-bottom: -25px;
    margin-top: 20px;
`
const StChkInput = styled.input`
    margin-right: 10px;
`
const StDelBtn = styled.button`
    width: 10%;
    height: 40px;
    font-size: 40px;
    color: gray;
    background-color: #fff;
    border: none;
    opacity: 0.6;
`
const StAddMember = styled.div`
    display: flex;
    justify-content: center;
`
const StAddBtn = styled.button`
    font-size: 50px;
    color: gray;
    background: #fff;
    border: none;
    margin-top: -30px;
    opacity: 0.6;
`
const StMemberPhotoBtn = styled.button`
    background: #fff;
    border: 1px solid gray;
    padding: 4px;
    border-radius: 7px;
    margin-left: 5px;
    color: gray;
`
