import device from 'components/bases/devices/devices'
import styled, { css } from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  max-width: 960px;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  img {
    max-width: 147px;
  }
  ${device.laptop} {
    margin-bottom: 32px;
    grid-template-columns: 0.4fr 0.4fr;
  }
  ${device.tablet} {
    grid-template-columns: 0.5fr;
  }
`

export const Box = styled.div`
  width: 309.33px;
  height: 305px;
  padding: 10px 11px;
  border-radius: 4px;
  font-weight: 700;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  p {
    font-size: 12px;
    color: #333333;
  }
  > span {
    font-size: 16px;
    color: #2f2e41;
  }
  ${device.tablet} {
    max-width: 309.33px;
    width: 100%;
  }
`

export const Button = styled.button<{ $active: boolean }>`
  ${({ $active }) => css`
    width: 287.33px;
    height: 40px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #ffffff;
    background-color: ${$active ? '#039B00' : '#009edd'};
    transition: linear 0.2s;
    :hover {
      transition: all 0.3s;
    }
    :active {
      transition: none;
      transform: translateY(0.7px);
    }
    span {
      margin-right: 10px;
      font-weight: 400;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ${device.tablet} {
      min-width: 210px;
      width: 100%;
    }
  `}
`
