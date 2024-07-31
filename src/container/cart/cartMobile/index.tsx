import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useCart } from 'hooks'
import Empty from 'container/cart/empty'
import formatPrice from 'utils/formatPrices'

const CartMobile = () => {
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
        <S.Content>
          {cart.map(item => {
            return (
              <S.Wrapper key={item.id}>
                <S.BoxProduct>
                  <img src={item.image} alt={item.title} />
                  <p>{item.title}</p>
                  <S.Price>{formatPrice(item.price)}</S.Price>
                  <img
                    src="img/laystall.png"
                    alt="laystall"
                    onClick={() => removeFromCart(item.id)}
                  />
                </S.BoxProduct>

                <S.BoxQtd>
                  <div>
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
                  </div>
                  <S.Title>
                    SUBTOTAL
                    <br />
                    <S.Price>
                      {formatPrice(itemTotal(item.id) || item?.price)}
                    </S.Price>
                  </S.Title>
                </S.BoxQtd>
              </S.Wrapper>
            )
          })}

          <S.BoxButton>
            <hr />
            <div>
              <S.Title>TOTAL</S.Title>
              <S.Price>{formatPrice(totalValue())}</S.Price>
            </div>
            <Link to="/buy-success">
              <S.Button onClick={finalizeCart}>FINALIZAR PEDIDO</S.Button>
            </Link>
          </S.BoxButton>
        </S.Content>
      )}
    </>
  )
}

export default CartMobile
