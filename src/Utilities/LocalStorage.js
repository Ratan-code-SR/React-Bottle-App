
const getStoredCart = () => {
    const storedCardString = localStorage.getItem("cart")
    if (storedCardString) {
        return JSON.parse(storedCardString)
    } else {
        return []
    }
}

const saveCartToLs = (cart) => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem("cart", cartStringified)
}

const addToLs = (id) => {
    const cart = getStoredCart()
    cart.push(id)
    saveCartToLs(cart)
}

export{addToLs,getStoredCart}