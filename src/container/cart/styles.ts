import device from 'components/bases/devices/devices'
import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 960px;
  min-height: 286px;
  width: 100%;
  height: 100%;
  padding: 24px;
  border-radius: 4px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  background-color: #ffffff;
  hr {
    width: 902px;
    height: 1px;
    margin-bottom: 20px;
    color: #999999;
  }
  ${device.laptop} {
    width: 95%;
    hr {
      width: 100%;
    }
  }
  ${device.tablet} {
    display: none;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 0.5fr 0.5fr 0.1fr;
  gap: 16px;
  img:first-child {
    max-width: 89px;
  }
  img:last-child {
    margin-left: auto;
    cursor: pointer;
  }
`

export const Title = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #999999;
  text-transform: uppercase;
`

export const BoxProduct = styled.div`
  line-height: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  p {
    margin-left: 64px;
    font-weight: 700;
    font-size: 14px;
    color: #2f2f41;
  }
`

export const BoxQtd = styled.div`
  img {
    cursor: pointer;
  }
`

export const Qtd = styled.span`
  width: 62px;
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
  font-weight: 700;
  font-size: 16px;
  color: #2f2f41;
`

export const BoxButton = styled.div`
  max-width: 902px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  span {
    margin-left: auto;
  }
  span:last-child {
    margin: 0 10px 0 32px;
    font-size: 24px;
  }
`

export const Button = styled.button<{ active?: boolean }>`
  width: 235.42px;
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
