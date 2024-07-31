import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import CartMobile from './cartMobile'
import { useCart } from 'hooks'
import formatPrice from 'utils/formatPrices'
import Empty from 'container/cart/empty'

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    finalizeCart,
    totalValue,
    itemTotal
  } = useCart()

  return (
    <>
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <S.Container>
          <CartMobile />
          <S.Content>
            <S.Wrapper>
              <S.Title>PRODUTO</S.Title>
              <S.Title>QTD</S.Title>
              <S.Title>SUBTOTAL</S.Title>
            </S.Wrapper>

            {cart.map(item => {
              return (
                <S.Wrapper key={item.id}>
                  <S.BoxProduct>
                    <img src={item.image} alt={item.title} />
                    <p>
                      {item.title}
                      <br />
                      <S.Price>{formatPrice(item.price)}</S.Price>
                    </p>
                  </S.BoxProduct>

                  <S.BoxQtd>
                    <img
                      src="img/decrease.png"
                      alt="decrease"
                      onClick={() => decreaseQuantity(item.id)}
                    />
                    <S.Qtd>{item.quantity}</S.Qtd>
                    <img
                      src="img/add.png"
                      alt="add"
                      onClick={() => increaseQuantity(item.id)}
                    />
                  </S.BoxQtd>

                  <S.Price>
                    {formatPrice(itemTotal(item.id) || item?.price)}
                  </S.Price>
                  <img
                    src="img/laystall.png"
                    alt="laystall"
                    onClick={() => removeFromCart(item.id)}
                  />
                </S.Wrapper>
              )
            })}

            <hr />
            <S.BoxButton>
              <Link to="/buy-success">
                <S.Button onClick={finalizeCart}>FINALIZAR PEDIDO</S.Button>
              </Link>
              <S.Title>TOTAL</S.Title>
              <S.Price>{formatPrice(totalValue())}</S.Price>
            </S.BoxButton>
          </S.Content>
        </S.Container>
      )}
    </>
  )
}

export default Cart
