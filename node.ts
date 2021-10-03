/* eslint-disable import/no-extraneous-dependencies */
import { Application, Context } from '@curveball/core'
import router from '@curveball/router'

import data from './data'

const app = new Application()

console.log('http://localhost:1337')

app.use(
  router('/data', (ctx: Context) => {
    ctx.status = 200
    ctx.response.body = data
  })
)

app.listen(1337)
