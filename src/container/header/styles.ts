import device from 'components/bases/devices/devices'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  ${device.laptop}{
    padding: 0 10px;
  }
`

export const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  height: 74px;
  padding: 18px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`

export const Box = styled.div`
  font-size: 14px;
  line-height: 0.6;
  font-weight: 700;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    font-size: 12px;
    font-weight: 600;
    color: #999999;
  }
  img {
    margin-left: 10px;
  }
  ${device.tablet}{
    p{
      display: none;
    }
  }
`
