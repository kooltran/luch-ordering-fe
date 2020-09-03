const NODE_ENV = process.env.NODE_ENV
console.log(NODE_ENV)
export const DOMAIN =
  NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://luch-ordering.herokuapp.com'

export const REDIRECT_URL =
  NODE_ENV === 'development'
    ? 'http://localhost:3000/google'
    : 'https://luch-ordering.herokuapp.com/google'
