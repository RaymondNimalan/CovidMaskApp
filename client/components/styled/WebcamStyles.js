import styled from 'styled-components'

export const MainContainer = styled.div`
  display: inline-flex;
  position: relative;
  flex-direction: column;
  height: 800px;
  width: 100%;
  align-items: center;
  //padding-left: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 60px;
  }
`

export const CameraContainer = styled.div`
  display: flex;
  width: 100%;
  height: 480px;
  justify-content: center;
  background-color: blue;
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  font-size: 48px;
  align-items: center;
  justify-content: space-between;
`

export const Icon = styled.div`
  display: flex;
  cursor: pointer;
  margin: 0px 32px 0px 32px;
`

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``

// export const CameraContainer = styled.div``
