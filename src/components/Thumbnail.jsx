import styled from "styled-components";

const Thumbnail = () => {
    return (
        <StThumbnailWrap>
            <StThumbnail src={process.env.PUBLIC_URL + '/iu.png'} alt="" />
            <UploadPhotoBtn>이미지업로드</UploadPhotoBtn>
        </StThumbnailWrap>
    );
};

export default Thumbnail;

const StThumbnailWrap = styled.div`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const StThumbnail = styled.img`
    border-radius: 70px;
`

const UploadPhotoBtn = styled.button`
    width: 80%;
    margin: 40px 0 20px;
    padding: 5px;
    background-color: #fff;
    border: 1px solid grey;
    font-weight: bold;
    border-radius: 7px;
    color: gray;
`