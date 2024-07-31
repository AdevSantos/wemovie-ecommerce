import device from 'components/bases/devices/devices'
import styled from 'styled-components'

export const Content = styled.div`
  display: none;
  ${device.tablet} {
    width: 92%;
    margin-bottom: 20px;
    padding: 16px;
    border-radius: 4px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    background-color: #ffffff;
    hr {
      width: 100%;
      height: 1px;
      color: #999999;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  overflow: auto;
  img:first-child {
    max-width: 89px;
  }
  img:last-child {
    cursor: pointer;
  }
`

export const Title = styled.span`
  margin: 10px 0;
  font-weight: 700;
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
`

export const BoxProduct = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  p {
    margin: 0 5px 0 10px;
    font-weight: 700;
    font-size: 14px;
    color: #2f2f41;
  }
`

export const BoxQtd = styled.div`
  width: 100%;
  margin: -76px 0 32px;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  img {
    cursor: pointer;
  }
  div {
    margin: 0 32px 0 auto;
    ${device.mobileM} {
      margin: 0 20px 0 auto;
    }
  }
  ${device.mobileS} {
    margin: 0;
  }
`

export const Qtd = styled.span`
  width: 59px;
  height: 26px;
  margin: 0 10px;
  padding: 16px;
  font-weight: 400;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: #2f2f41;
  background-color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: super;
`

export const Price = styled.span`
  margin: 0 5px 0 auto;
  font-weight: 700;
  font-size: 16px;
  color: #2f2f41;
`

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  div {
    width: 100%;
    margin: 20px 0 10px;
    display: flex;
    justify-content: space-between;
  }
  span:last-child {
    font-size: 24px;
  }
  a {
    display: contents;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  font-size: 12px;
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
