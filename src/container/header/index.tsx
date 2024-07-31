import React from 'react'
import * as S from './styles'
import { useCart } from 'hooks'

const Header = () => {
  const { cart } = useCart()

  return (
    <S.Container>
      <S.Wrapper>
        <a href="/">
          <h1>WeMovies</h1>
        </a>
        <S.Box>
          <label>
            <p>Meu Carrinho</p>
            <br />
            <span>{cart.length} itens</span>
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
