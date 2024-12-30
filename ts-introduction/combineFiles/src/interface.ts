interface User {
    email: string,
    password: string | number,
    username: string,
    avatar?: string
}

interface Item {
    name: string,
    category: string,
    price: number,
    stock: number,
    image?: string
}

export { User, Item }