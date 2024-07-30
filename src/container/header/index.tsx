import React from 'react'
import * as S from './styles'

const Header = () => {

  return (
    <S.Container>
      <S.Wrapper>
        <h1>WeMovies</h1>
        <S.Box>
          <label>
            <p>Meu Carrinho</p>
            <br />
            <span>
              0 itens
            </span>
          </label>
          <a href="/cart">
            <img src="/img/cart.svg" alt="cart icon" />
          </a>
        </S.Box>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
