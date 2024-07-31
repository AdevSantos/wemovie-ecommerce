import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCart, CartItem } from 'hooks'
import * as S from './styles'
import Loading from 'components/bases/loading'
import formatPrice from 'utils/formatPrices'

const Home = () => {
  const { loading, getItemQuantity, addToCart, isInCart, itemTotal } = useCart()
  const [items, setItems] = useState<CartItem[]>([])
  const [apiLoading, setApiLoading] = useState(loading)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(
          'https://wefit-movies.vercel.app/api/movies'
        )
        setItems(response.data.products)
      } catch (error) {
        console.error('An error occurred while fetching the data', error)
      } finally {
        setApiLoading(false)
      }
    }

    fetchItems()
  }, [])

  setTimeout(() => {
    if (apiLoading) {
      setApiLoading(false)
    }
  }, 2000)

  return (
    <>
      {apiLoading ? (
        <Loading />
      ) : (
        <S.Container>
          <S.Wrapper>
            {items?.map(item => (
              <S.Box key={item?.id}>
                <img src={item.image} alt={item.title} />
                <p>{item?.title}</p>
                <span>{formatPrice(itemTotal(item.id) || item?.price)}</span>
                <S.Button
                  $active={isInCart(item.id)}
                  onClick={() => addToCart(item)}
                >
                  <span>
                    <img src="img/shopping-cart.png" alt="shopping" />
                    {getItemQuantity(item.id)}
                  </span>
                  ADICIONAR AO CARRINHO
                </S.Button>
              </S.Box>
            ))}
          </S.Wrapper>
        </S.Container>
      )}
    </>
  )
}

export default Home
