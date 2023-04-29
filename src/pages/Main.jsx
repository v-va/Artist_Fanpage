import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Main = () => {
  return (
    <StContainer>
      <Link to="/artistRegister">아티스트 등록</Link>
    </StContainer>
  )
}

export default Main

const StContainer = styled.div`
    width: 800px;
    height: 500px;
    margin: 50px auto;
    color: gray;
`;