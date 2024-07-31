// CartContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect
} from 'react'
// types
export interface CartItem {
  id: number
  image: string
  title: string
  price: number
  quantity: number
}

export interface CartContextType {
  cart: CartItem[]
  loading: boolean
  addToCart: (item: CartItem) => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  finalizeCart: () => void
  totalValue: () => number
  isInCart: (id: number) => boolean
  itemTotal: (id: number) => number
  getItemQuantity: (id: number) => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (item: CartItem) => {
    setLoading(true)
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
    setLoading(false)
  }

  const increaseQuantity = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id))
  }

  const finalizeCart = () => {
    setCart([])
  }

  const totalValue = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const isInCart = (id: number) => {
    return cart.some(item => item.id === id)
  }

  const itemTotal = (id: number) => {
    const item = cart.find(item => item.id === id)
    return item ? item.price * item.quantity : 0
  }

  const getItemQuantity = (id: number): number => {
    const item = cart.find(item => item.id === id)
    return item ? item.quantity : 0
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        finalizeCart,
        totalValue,
        isInCart,
        itemTotal,
        getItemQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('wrap a CartProvider APP')
  }
  return context
}
