import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const View = () => {
  return (
    <html>
      <body>
        <input type="text" placeholder='Enter Username' />
        <input type='password' placeholder='Enter Password' />
        <button>Login</button>
      </body>
    </html>
  )
}

app.get('/page', (c) => {
  return c.html(<View />)
})

export default app
