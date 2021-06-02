import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {MainContainer, CameraContainer} from './styled/HomeStyles'
import WebcamCapture from './WebcamCapture'
import Result from './Result'

const Home = () => {
  const toggle = useSelector(state => state.toggleReducer)

  return (
    <MainContainer>
      {!toggle ? (
        <CameraContainer>
          <WebcamCapture />
        </CameraContainer>
      ) : (
        <Result />
      )}
    </MainContainer>
  )
}

export default Home
