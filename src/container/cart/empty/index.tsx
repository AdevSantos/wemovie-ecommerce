import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Empty = () => {
  return (
    <S.Container>
      <S.Wrapper>
      <h1>Parece que não há nada por aqui :(</h1>
      <img src="img/empty-cart.png" alt="" />
      <hr/>
      <Link to='/'><S.Button>
          Voltar
          </S.Button></Link>
      </S.Wrapper>
    </S.Container>
  )
}

export default Empty
