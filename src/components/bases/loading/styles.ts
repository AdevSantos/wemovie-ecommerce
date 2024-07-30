import styled, { keyframes } from 'styled-components'

const AnimationLoading = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Loading = styled.div`
    width: 55.41px;
    height: 55.41px;
    border-radius: 50%;
    border: 2px solid #808080;
    border-left-color: #ffffff;
    animation: ${AnimationLoading} 0.8s linear infinite;
`
