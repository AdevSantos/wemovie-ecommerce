import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const BuySuccess = () => {
  return (
    <S.Container>
      <S.Wrapper>
      <h1>Compra realizada com sucesso!</h1>
      <img src="img/buy-success.png" alt="" />
      <Link to='/'><S.Button>
          Voltar
          </S.Button></Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default BuySuccess
