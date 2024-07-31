import device from 'components/bases/devices/devices'
import styled from 'styled-components'

export const Container = styled.section`
    width: 100%;
    height: 100%;
    padding-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
    margin-bottom: 32px;
    font-size: 20px;
    font-weight: 700;
    color: #2F2E41;
    }
    ${device.laptop}{
    padding: 24px 10px 0;
    h1{
      width: 180px;
      text-align: center;
    }
    }
`

export const Wrapper = styled.section`
    max-width: 960px;
    width: 100%;
    height: 532.8px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    overflow: hidden;
    hr{
    width: 447px;
    height: 1.36px;
    margin-bottom: 32px;
    color: #3F3D56;
    }
    ${device.laptop}{
    width: 95%;
    hr{
      width: 105.8%;
    }
    }
    ${device.tablet}{
      padding: 0 10px;
      margin-bottom: 32px;
    img{
      max-width: 100%;
    }
    }
`

export const Button = styled.button`
    width: 180px;
    height: 40px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #ffffff;
    background-color: #009edd;
    transition: linear 0.2s;
    :hover {
      transition: all 0.3s;
    }
    :active {
      transition: none;
      transform: translateY(0.7px);
    }
`
